import { useQuery } from '@tanstack/react-query';
import { ChainId } from 'sushi/chain';
import { useAllPrices } from '../prices';
import { angleRewardsQueryFn, angleRewardsSelect } from './useAngleRewards';
import { angleRewardsMultipleValidator } from './validator';
export const useAngleRewardsMultipleChains = ({ chainIds, account, }) => {
    const { data: prices } = useAllPrices();
    return useQuery({
        queryKey: ['getAngleRewardsMultiple', { chainIds, account, prices }],
        queryFn: async () => {
            if (account && prices) {
                const res = await Promise.all(chainIds.map((chainId) => angleRewardsQueryFn({ chainIds: [chainId], account })));
                const parsed = angleRewardsMultipleValidator.parse(res);
                return parsed
                    .map((el, i) => {
                    const data = angleRewardsSelect({
                        chainId: chainIds[i],
                        data: el[chainIds[i]],
                        prices: prices[chainIds[i]],
                    });
                    return data
                        ? {
                            chainId: chainIds[i],
                            ...data,
                        }
                        : null;
                })
                    .filter((el) => el !== null);
            }
            return null;
        },
        staleTime: 15000,
        cacheTime: 60000,
        enabled: !!account,
    });
};
//# sourceMappingURL=useAngleRewardsMultipleChains.js.map