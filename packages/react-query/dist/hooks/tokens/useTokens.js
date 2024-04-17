import { saveTokens } from '@sushiswap/dexie';
import { useQuery } from '@tanstack/react-query';
import { Token } from 'sushi/currency';
import { getAddress } from 'viem';
export const fetchTokensQueryFn = async () => {
    const resp = await fetch('https://tokens.sushi.com/v0');
    if (resp.status === 200) {
        const data = await resp.json();
        await saveTokens({
            tokens: data.map(({ id, address, symbol, decimals, name }) => {
                const [chainId] = id.split(':');
                return {
                    id,
                    address,
                    symbol,
                    decimals,
                    name,
                    status: 'APPROVED',
                    chainId: Number(chainId),
                };
            }),
        });
        return data.reduce((acc, { id, name, symbol, decimals }) => {
            const [_chainId, _address] = id.split(':');
            const chainId = Number(_chainId);
            const address = String(_address);
            if (!acc?.[chainId])
                acc[chainId] = {};
            const map = acc[chainId];
            map[getAddress(address)] = new Token({
                chainId,
                name,
                decimals,
                symbol,
                address,
            });
            return acc;
        }, {});
    }
    throw new Error('Could not fetch tokens');
};
export const useTokens = ({ chainId }) => {
    return useQuery({
        queryKey: ['tokens'],
        queryFn: fetchTokensQueryFn,
        select: (data) => data[chainId],
        keepPreviousData: true,
        staleTime: 900000,
        cacheTime: 86400000, // 24hs
    });
};
//# sourceMappingURL=useTokens.js.map