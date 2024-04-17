import { useQuery } from '@tanstack/react-query';
import { ChainId } from 'sushi/chain';
import { Amount, Token, tryParseAmount } from 'sushi/currency';
import { ZERO } from 'sushi/math';
import { parseUnits } from 'viem';
import z from 'zod';
import { isAngleEnabledChainId } from 'sushi/config';
import { usePrices } from '../prices';
import { angleRewardsPoolsValidator, angleRewardsValidator } from './validator';
export const angleRewardsQueryFn = async ({ chainIds, account, }) => {
    const url = new URL('https://api.merkl.xyz/v2/merkl');
    url.searchParams.set('AMMs', 'sushiswapv3');
    chainIds.forEach((chainId) => url.searchParams.append('chainIds', chainId.toString()));
    if (account) {
        url.searchParams.set('user', account);
    }
    const res = await fetch(url);
    const json = await res.json();
    return angleRewardsValidator.parse(json);
};
export const angleRewardsSelect = ({ chainId, data, prices, }) => {
    if (!data?.pools || !prices)
        return undefined;
    const pools = Object.entries(data.pools).reduce((acc, [a, b]) => {
        acc[a] = {
            ...b,
            id: `${chainId}:${b.pool}`,
            chainId,
            distributionData: b.distributionData.reduce((acc, el) => {
                if (el.symbolRewardToken !== 'aglaMerkl' && !el.whitelist.length) {
                    acc.push({
                        ...el,
                        token: new Token({
                            chainId,
                            address: el.rewardToken,
                            symbol: el.symbolRewardToken,
                            decimals: 18,
                        }),
                    });
                }
                return acc;
            }, []),
            token0: new Token({
                chainId,
                address: b.token0,
                symbol: b.symbolToken0,
                decimals: b.decimalsToken0,
            }),
            token1: new Token({
                chainId,
                address: b.token1,
                symbol: b.symbolToken1,
                decimals: b.decimalsToken1,
            }),
            rewardsPerToken: Object.entries(b.rewardsPerToken).reduce((acc, [k, v]) => {
                const token0 = new Token({
                    chainId,
                    address: k,
                    decimals: v.decimals,
                    symbol: v.symbol,
                });
                if (token0.symbol !== 'aglaMerkl') {
                    acc[k] = {
                        accumulatedSinceInception: Amount.fromRawAmount(token0, parseUnits(v.accumulatedSinceInception.toFixed(18), v.decimals).toString()),
                        breakdown: Object.entries(v.breakdownOfUnclaimed).reduce((acc, [i, j]) => {
                            acc[i] = Amount.fromRawAmount(token0, parseUnits(j.toFixed(18), v.decimals).toString());
                            return acc;
                        }, {}),
                        symbol: v.symbol,
                        unclaimed: Amount.fromRawAmount(token0, v.unclaimedUnformatted),
                    };
                }
                return acc;
            }, {}),
        };
        return acc;
    }, {});
    const unclaimed = Object.entries(data.transactionData ?? {}).reduce((accum, [address, transactionData]) => {
        const token = data.validRewardTokens?.find((token) => token.token === address);
        if (!token)
            return accum;
        const amount = Amount.fromRawAmount(new Token({
            chainId: Number(chainId),
            address: token.token,
            decimals: token.decimals,
            symbol: token.symbol,
        }), transactionData.claim);
        let amountUSD = 0;
        const price = prices[amount.currency.wrapped.address];
        if (amount?.greaterThan(ZERO) && price) {
            amountUSD = Number(Number(amount.toExact()) * Number(price.toFixed(10)));
        }
        if (Number.isNaN(amountUSD) || amountUSD < 0.000001) {
            amountUSD = 0;
        }
        accum.push({
            amount,
            amountUSD,
        });
        return accum;
    }, []);
    const validRewardTokens = (data.validRewardTokens ?? [])
        .map((el) => {
        const token = new Token({
            chainId,
            address: el.token,
            symbol: el.symbol,
            decimals: el.decimals,
        });
        return {
            minimumAmountPerEpoch: tryParseAmount(el.minimumAmountPerEpoch.toString(), token),
            token,
        };
    })
        .filter((el) => el.token.symbol !== 'aglaMerkl');
    return {
        ...data,
        unclaimed,
        pools,
        validRewardTokens,
    };
};
export const useAngleRewards = ({ chainId, account, enabled = true, }) => {
    const { data: prices } = usePrices({ chainId });
    return useQuery({
        queryKey: ['getAngleRewards', { chainId, account }],
        queryFn: async () => await angleRewardsQueryFn({ chainIds: [chainId], account }),
        select: (data) => angleRewardsSelect({ chainId, data: data[chainId], prices }),
        staleTime: 15000,
        cacheTime: 60000,
        enabled: Boolean(enabled && prices && chainId && isAngleEnabledChainId(chainId)),
    });
};
//# sourceMappingURL=useAngleRewards.js.map