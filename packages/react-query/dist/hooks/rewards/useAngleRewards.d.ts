import { ChainId } from 'sushi/chain';
import { Amount, Token } from 'sushi/currency';
import z from 'zod';
import { usePrices } from '../prices';
import { angleRewardsPoolsValidator, angleRewardsValidator } from './validator';
type TransformedRewardsPerToken = Record<string, {
    accumulatedSinceInception: Amount<Token>;
    breakdown: Record<string, Amount<Token>>;
    symbol: string;
    unclaimed: Amount<Token>;
}>;
export type AngleRewardsPool = Omit<z.infer<typeof angleRewardsPoolsValidator>, 'rewardsPerToken' | 'token0' | 'token1' | 'distributionData'> & {
    id: string;
    chainId: ChainId;
    distributionData: Array<Omit<z.infer<typeof angleRewardsPoolsValidator>['distributionData'][0], 'token'> & {
        token: Token;
    }>;
    rewardsPerToken: TransformedRewardsPerToken;
    token0: Token;
    token1: Token;
};
type TransformedPools = Record<string, AngleRewardsPool>;
interface AngleRewardsQueryParams {
    chainIds: ChainId[];
    account?: string | undefined;
    enabled?: boolean;
}
export declare const angleRewardsQueryFn: ({ chainIds, account, }: AngleRewardsQueryParams) => Promise<Record<number, {
    pools: Record<string, {
        pool: string;
        token0: string;
        token1: string;
        aprs: Record<string, number | null>;
        decimalsToken0: number;
        decimalsToken1: number;
        distributionData: {
            rewardToken: string;
            amount: number;
            endTimestamp: number;
            isOutOfRangeIncentivized: boolean;
            isLive: boolean;
            propFees: number;
            propToken0: number;
            propToken1: number;
            startTimestamp: number;
            symbolRewardToken: string;
            whitelist: string[];
            amm?: number | undefined;
            breakdown?: Record<string, number> | undefined;
            unclaimed?: number | undefined;
        }[];
        poolTotalLiquidity: number;
        meanAPR: number | null;
        poolFee: number;
        rewardsPerToken: Record<string, {
            symbol: string;
            decimals: number;
            unclaimed: number;
            accumulatedSinceInception: number;
            breakdownOfAccumulated: Record<string, number>;
            breakdownOfUnclaimed: Record<string, number>;
            unclaimedUnformatted: string;
        }>;
        poolBalanceToken0: number;
        poolBalanceToken1: number;
        symbolToken0: string;
        symbolToken1: string;
        tvl: number | null;
        almDetails?: {
            origin: number;
            balance0?: number | null | undefined;
            balance1?: number | null | undefined;
            tvl?: number | null | undefined;
        }[] | undefined;
        userTVL?: number | null | undefined;
        userBalanceToken0?: number | undefined;
        userBalanceToken1?: number | undefined;
    }>;
    feeRebate?: number | undefined;
    message?: string | undefined;
    signed?: boolean | undefined;
    transactionData?: Record<string, {
        token: string;
        claim: string;
        leaf: string;
        proof: string[];
    }> | undefined;
    validRewardTokens?: {
        symbol: string;
        token: string;
        decimals: number;
        minimumAmountPerEpoch: number;
    }[] | undefined;
}>>;
interface AngleRewardsSelect {
    chainId: ChainId;
    data: z.infer<typeof angleRewardsValidator>[number] | undefined;
    prices: ReturnType<typeof usePrices>['data'];
}
export declare const angleRewardsSelect: ({ chainId, data, prices, }: AngleRewardsSelect) => {
    unclaimed: {
        amount: Amount<Token>;
        amountUSD: number;
    }[];
    pools: TransformedPools;
    validRewardTokens: {
        minimumAmountPerEpoch: Amount<Token> | undefined;
        token: Token;
    }[];
    feeRebate?: number | undefined;
    message?: string | undefined;
    signed?: boolean | undefined;
    transactionData?: Record<string, {
        token: string;
        claim: string;
        leaf: string;
        proof: string[];
    }> | undefined;
} | undefined;
interface UseAngleRewardsParams {
    chainId: ChainId;
    account?: string | undefined;
    enabled?: boolean;
}
export declare const useAngleRewards: ({ chainId, account, enabled, }: UseAngleRewardsParams) => import("@tanstack/react-query").UseQueryResult<{
    unclaimed: {
        amount: Amount<Token>;
        amountUSD: number;
    }[];
    pools: TransformedPools;
    validRewardTokens: {
        minimumAmountPerEpoch: Amount<Token> | undefined;
        token: Token;
    }[];
    feeRebate?: number | undefined;
    message?: string | undefined;
    signed?: boolean | undefined;
    transactionData?: Record<string, {
        token: string;
        claim: string;
        leaf: string;
        proof: string[];
    }> | undefined;
} | undefined, unknown>;
export {};
//# sourceMappingURL=useAngleRewards.d.ts.map