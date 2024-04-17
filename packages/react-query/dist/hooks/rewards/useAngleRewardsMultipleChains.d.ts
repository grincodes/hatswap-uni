import { ChainId } from 'sushi/chain';
interface UseAngleRewardsParams {
    chainIds: ChainId[];
    account: string | undefined;
}
export declare const useAngleRewardsMultipleChains: ({ chainIds, account, }: UseAngleRewardsParams) => import("@tanstack/react-query").UseQueryResult<{
    unclaimed: {
        amount: import("sushi/currency").Amount<import("sushi/currency").Token>;
        amountUSD: number;
    }[];
    pools: {
        [x: string]: import("./useAngleRewards").AngleRewardsPool;
    };
    validRewardTokens: {
        minimumAmountPerEpoch: import("sushi/currency").Amount<import("sushi/currency").Token> | undefined;
        token: import("sushi/currency").Token;
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
    chainId: ChainId;
}[] | null, unknown>;
export {};
//# sourceMappingURL=useAngleRewardsMultipleChains.d.ts.map