import { getToken, saveTokens } from '@sushiswap/dexie';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { ChainId } from 'sushi/chain';
import { Token } from 'sushi/currency';
import { isAddress } from 'viem';
const hydrate = (chainId, data, withStatus) => {
    if (data && chainId) {
        const { address, name, symbol, decimals } = data;
        const token = new Token({
            chainId,
            name,
            decimals,
            symbol,
            address,
        });
        if (withStatus) {
            return {
                token,
                status: data.status,
            };
        }
        return token;
    }
    return undefined;
};
/**
 * @deprecated use @sushiswap/wagmi/useTokenWithCache
 */
export const useToken = ({ chainId, address, withStatus, enabled = true, }) => {
    const select = useCallback((data) => hydrate(chainId, data, withStatus), [chainId, withStatus]);
    return useQuery({
        queryKey: ['token', { chainId, address }],
        queryFn: async () => {
            // const customTokens = localStorage.getItem('sushi.customTokens')
            // if (customTokens?.includes(`${chainId}:${address}`)) {
            //     return JSON.parse(customTokens)[`${chainId}:${address}`] as Data
            // }
            // Try fetching from cache
            const token = await getToken({ chainId, address });
            if (token) {
                return token;
            }
            // Fallback to api
            const resp = await fetch(`https://tokens.sushi.com/v0/${chainId}/${address}`);
            if (resp.status === 200) {
                const { address, name, symbol, decimals, status, id } = await resp.json();
                const [chainId] = id.split(':');
                // Save to cache
                await saveTokens({
                    tokens: [
                        {
                            address: address.toLowerCase(),
                            chainId: Number(chainId),
                            name,
                            symbol,
                            decimals,
                            status,
                            id,
                        },
                    ],
                });
                return { address, name, symbol, decimals, status, id };
            }
            else {
                throw Error(`https://tokens.sushi.com/v0/${chainId}/${address}: Token not found`);
            }
        },
        enabled: Boolean(enabled && chainId && address && isAddress(address)),
        select,
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 900000,
        cacheTime: 86400000, // 24hs
    });
};
//# sourceMappingURL=useToken.js.map