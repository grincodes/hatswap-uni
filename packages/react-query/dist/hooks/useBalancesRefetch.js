import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
export const useBalancesRefetch = ({ chainId, account }) => {
    const queryClient = useQueryClient();
    return useCallback(async () => {
        return await queryClient.refetchQueries({
            queryKey: [`/api/balance/v0/${chainId}/${account}`],
            type: 'active',
        });
    }, [queryClient, chainId, account]);
};
//# sourceMappingURL=useBalancesRefetch.js.map