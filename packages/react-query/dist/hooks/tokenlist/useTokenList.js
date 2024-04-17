import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { Token } from 'sushi/currency';
import { getAddress } from 'viem';
import { tokenListValidator } from './validator';
export const useTokenListQuery = (select) => useQuery({
    queryKey: ['https://tokens.sushi.com/v0'],
    queryFn: async () => {
        const res = await (await fetch('https://tokens.sushi.com/v0')).json();
        return tokenListValidator.parse(res);
    },
    select,
    keepPreviousData: true,
    staleTime: 900000,
    cacheTime: 86400000, // 24hs
});
export const useTokenList = (filter) => {
    const select = useCallback((data) => {
        if (filter === 'showNone')
            return {};
        const _filter = filter
            ? filter.filter((el) => el.length > 2).map((el) => el.toLowerCase())
            : undefined;
        return data.reduce((acc, { chainId, name, symbol, address, decimals }) => {
            if (filter === undefined ||
                (_filter &&
                    (_filter.findIndex((el) => name.toLowerCase().includes(el)) >=
                        0 ||
                        _filter.findIndex((el) => address.toLowerCase().includes(el)) >=
                            0 ||
                        _filter.findIndex((el) => symbol.toLowerCase().includes(el)) >=
                            0))) {
                acc[`${chainId}:${getAddress(address)}`] = new Token({
                    chainId,
                    name,
                    symbol,
                    decimals,
                    address,
                });
            }
            return acc;
        }, {});
    }, [filter]);
    return useTokenListQuery(select);
};
//# sourceMappingURL=useTokenList.js.map