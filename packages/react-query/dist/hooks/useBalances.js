import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { Amount, Native } from 'sushi/currency';
import { getAddress } from 'viem';
import ms from 'ms';
import { useTokens } from './tokens';
export const NativeAddress = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
// const queryKey = ({ chainId, account }): { account: string; chainId: number } => [
//   `/api/balance/v0/${chainId}/${account}`,
// ]
export const useBalancesQuery = ({ chainId, account, enabled = true }, select) => {
    return useQuery({
        queryKey: [`/api/balance/v0/${chainId}/${account}`],
        queryFn: () => {
            return fetch(`/api/balance/v0/${chainId}/${account}`).then((response) => response.json());
        },
        staleTime: ms('15m'),
        cacheTime: ms('1h'),
        enabled: Boolean(chainId && account && enabled),
        select,
    });
};
export const useBalances = (variables) => {
    const { chainId } = variables;
    const { data: tokens } = useTokens({ chainId });
    const select = useCallback((data) => {
        if (!tokens)
            return {};
        return Object.entries(data).reduce((acc, [address, amount]) => {
            if (address.toLowerCase() === NativeAddress) {
                acc[address] = Amount.fromRawAmount(Native.onChain(chainId), amount);
            }
            else {
                const _address = getAddress(address);
                const _token = tokens[_address];
                if (typeof _token !== 'undefined') {
                    acc[_address] = Amount.fromRawAmount(_token, amount);
                }
            }
            return acc;
        }, {});
    }, [chainId, tokens]);
    return useBalancesQuery(variables, select);
};
//# sourceMappingURL=useBalances.js.map