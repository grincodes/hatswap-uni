import { useQuery } from '@tanstack/react-query';
import { Token } from 'sushi/currency';
import { getAddress, isAddress } from 'viem';
export const useTokenSearch = ({ address, enabled = true, }) => {
    return useQuery({
        queryKey: ['tokenSearch', { address }],
        queryFn: async () => {
            const data = await fetch(`https://tokens.sushi.com/v0/search/${address}`).then((response) => response.json());
            return data.reduce((acc, { id, name, symbol, decimals, status }) => {
                const [chainId, address] = id.split(':');
                acc[getAddress(String(address))] = {
                    token: new Token({
                        chainId: Number(chainId),
                        name,
                        decimals,
                        symbol,
                        address: String(address),
                    }),
                    official: status === 'APPROVED',
                };
                return acc;
            }, {});
        },
        enabled: enabled && !!address && isAddress(address),
        staleTime: 900000,
        cacheTime: 86400000, // 24hs
    });
};
//# sourceMappingURL=useTokenSearch.js.map