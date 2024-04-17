import z from 'zod';
export declare const angleRewardsPoolsValidator: z.ZodObject<{
    aprs: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodNumber>>;
    decimalsToken0: z.ZodNumber;
    decimalsToken1: z.ZodNumber;
    distributionData: z.ZodArray<z.ZodObject<{
        amm: z.ZodOptional<z.ZodNumber>;
        amount: z.ZodNumber;
        breakdown: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        endTimestamp: z.ZodNumber;
        isOutOfRangeIncentivized: z.ZodBoolean;
        isLive: z.ZodBoolean;
        propFees: z.ZodNumber;
        propToken0: z.ZodNumber;
        propToken1: z.ZodNumber;
        startTimestamp: z.ZodNumber;
        rewardToken: z.ZodString;
        symbolRewardToken: z.ZodString;
        unclaimed: z.ZodOptional<z.ZodNumber>;
        whitelist: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, "many">;
    poolTotalLiquidity: z.ZodNumber;
    meanAPR: z.ZodNullable<z.ZodNumber>;
    pool: z.ZodString;
    poolFee: z.ZodNumber;
    rewardsPerToken: z.ZodRecord<z.ZodString, z.ZodObject<{
        accumulatedSinceInception: z.ZodNumber;
        breakdownOfAccumulated: z.ZodRecord<z.ZodString, z.ZodNumber>;
        breakdownOfUnclaimed: z.ZodRecord<z.ZodString, z.ZodNumber>;
        decimals: z.ZodNumber;
        symbol: z.ZodString;
        unclaimed: z.ZodNumber;
        unclaimedUnformatted: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        decimals: number;
        unclaimed: number;
        accumulatedSinceInception: number;
        breakdownOfAccumulated: Record<string, number>;
        breakdownOfUnclaimed: Record<string, number>;
        unclaimedUnformatted: string;
    }, {
        symbol: string;
        decimals: number;
        unclaimed: number;
        accumulatedSinceInception: number;
        breakdownOfAccumulated: Record<string, number>;
        breakdownOfUnclaimed: Record<string, number>;
        unclaimedUnformatted: string;
    }>>;
    token0: z.ZodString;
    poolBalanceToken0: z.ZodNumber;
    token1: z.ZodString;
    poolBalanceToken1: z.ZodNumber;
    symbolToken0: z.ZodString;
    symbolToken1: z.ZodString;
    tvl: z.ZodNullable<z.ZodNumber>;
    almDetails: z.ZodOptional<z.ZodArray<z.ZodObject<{
        balance0: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        balance1: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        origin: z.ZodNumber;
        tvl: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        origin: number;
        balance0?: number | null | undefined;
        balance1?: number | null | undefined;
        tvl?: number | null | undefined;
    }, {
        origin: number;
        balance0?: number | null | undefined;
        balance1?: number | null | undefined;
        tvl?: number | null | undefined;
    }>, "many">>;
    userTVL: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    userBalanceToken0: z.ZodOptional<z.ZodNumber>;
    userBalanceToken1: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
export declare const angleRewardsValidator: z.ZodRecord<z.ZodNumber, z.ZodObject<{
    feeRebate: z.ZodOptional<z.ZodNumber>;
    message: z.ZodOptional<z.ZodString>;
    pools: z.ZodRecord<z.ZodString, z.ZodObject<{
        aprs: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodNumber>>;
        decimalsToken0: z.ZodNumber;
        decimalsToken1: z.ZodNumber;
        distributionData: z.ZodArray<z.ZodObject<{
            amm: z.ZodOptional<z.ZodNumber>;
            amount: z.ZodNumber;
            breakdown: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            endTimestamp: z.ZodNumber;
            isOutOfRangeIncentivized: z.ZodBoolean;
            isLive: z.ZodBoolean;
            propFees: z.ZodNumber;
            propToken0: z.ZodNumber;
            propToken1: z.ZodNumber;
            startTimestamp: z.ZodNumber;
            rewardToken: z.ZodString;
            symbolRewardToken: z.ZodString;
            unclaimed: z.ZodOptional<z.ZodNumber>;
            whitelist: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, "many">;
        poolTotalLiquidity: z.ZodNumber;
        meanAPR: z.ZodNullable<z.ZodNumber>;
        pool: z.ZodString;
        poolFee: z.ZodNumber;
        rewardsPerToken: z.ZodRecord<z.ZodString, z.ZodObject<{
            accumulatedSinceInception: z.ZodNumber;
            breakdownOfAccumulated: z.ZodRecord<z.ZodString, z.ZodNumber>;
            breakdownOfUnclaimed: z.ZodRecord<z.ZodString, z.ZodNumber>;
            decimals: z.ZodNumber;
            symbol: z.ZodString;
            unclaimed: z.ZodNumber;
            unclaimedUnformatted: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            symbol: string;
            decimals: number;
            unclaimed: number;
            accumulatedSinceInception: number;
            breakdownOfAccumulated: Record<string, number>;
            breakdownOfUnclaimed: Record<string, number>;
            unclaimedUnformatted: string;
        }, {
            symbol: string;
            decimals: number;
            unclaimed: number;
            accumulatedSinceInception: number;
            breakdownOfAccumulated: Record<string, number>;
            breakdownOfUnclaimed: Record<string, number>;
            unclaimedUnformatted: string;
        }>>;
        token0: z.ZodString;
        poolBalanceToken0: z.ZodNumber;
        token1: z.ZodString;
        poolBalanceToken1: z.ZodNumber;
        symbolToken0: z.ZodString;
        symbolToken1: z.ZodString;
        tvl: z.ZodNullable<z.ZodNumber>;
        almDetails: z.ZodOptional<z.ZodArray<z.ZodObject<{
            balance0: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            balance1: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            origin: z.ZodNumber;
            tvl: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            origin: number;
            balance0?: number | null | undefined;
            balance1?: number | null | undefined;
            tvl?: number | null | undefined;
        }, {
            origin: number;
            balance0?: number | null | undefined;
            balance1?: number | null | undefined;
            tvl?: number | null | undefined;
        }>, "many">>;
        userTVL: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        userBalanceToken0: z.ZodOptional<z.ZodNumber>;
        userBalanceToken1: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>>;
    signed: z.ZodOptional<z.ZodBoolean>;
    transactionData: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        claim: z.ZodString;
        leaf: z.ZodString;
        token: z.ZodString;
        proof: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        token: string;
        claim: string;
        leaf: string;
        proof: string[];
    }, {
        token: string;
        claim: string;
        leaf: string;
        proof: string[];
    }>>>;
    validRewardTokens: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodCatch<z.ZodObject<{
        minimumAmountPerEpoch: z.ZodNumber;
        token: z.ZodString;
        decimals: z.ZodNumber;
        symbol: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        token: string;
        decimals: number;
        minimumAmountPerEpoch: number;
    }, {
        symbol: string;
        token: string;
        decimals: number;
        minimumAmountPerEpoch: number;
    }>>, "many">, {
        symbol: string;
        token: string;
        decimals: number;
        minimumAmountPerEpoch: number;
    }[], unknown[]>>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
    validRewardTokens?: unknown[] | undefined;
}>>;
export declare const angleRewardsMultipleValidator: z.ZodArray<z.ZodRecord<z.ZodNumber, z.ZodObject<{
    feeRebate: z.ZodOptional<z.ZodNumber>;
    message: z.ZodOptional<z.ZodString>;
    pools: z.ZodRecord<z.ZodString, z.ZodObject<{
        aprs: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodNumber>>;
        decimalsToken0: z.ZodNumber;
        decimalsToken1: z.ZodNumber;
        distributionData: z.ZodArray<z.ZodObject<{
            amm: z.ZodOptional<z.ZodNumber>;
            amount: z.ZodNumber;
            breakdown: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            endTimestamp: z.ZodNumber;
            isOutOfRangeIncentivized: z.ZodBoolean;
            isLive: z.ZodBoolean;
            propFees: z.ZodNumber;
            propToken0: z.ZodNumber;
            propToken1: z.ZodNumber;
            startTimestamp: z.ZodNumber;
            rewardToken: z.ZodString;
            symbolRewardToken: z.ZodString;
            unclaimed: z.ZodOptional<z.ZodNumber>;
            whitelist: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, "many">;
        poolTotalLiquidity: z.ZodNumber;
        meanAPR: z.ZodNullable<z.ZodNumber>;
        pool: z.ZodString;
        poolFee: z.ZodNumber;
        rewardsPerToken: z.ZodRecord<z.ZodString, z.ZodObject<{
            accumulatedSinceInception: z.ZodNumber;
            breakdownOfAccumulated: z.ZodRecord<z.ZodString, z.ZodNumber>;
            breakdownOfUnclaimed: z.ZodRecord<z.ZodString, z.ZodNumber>;
            decimals: z.ZodNumber;
            symbol: z.ZodString;
            unclaimed: z.ZodNumber;
            unclaimedUnformatted: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            symbol: string;
            decimals: number;
            unclaimed: number;
            accumulatedSinceInception: number;
            breakdownOfAccumulated: Record<string, number>;
            breakdownOfUnclaimed: Record<string, number>;
            unclaimedUnformatted: string;
        }, {
            symbol: string;
            decimals: number;
            unclaimed: number;
            accumulatedSinceInception: number;
            breakdownOfAccumulated: Record<string, number>;
            breakdownOfUnclaimed: Record<string, number>;
            unclaimedUnformatted: string;
        }>>;
        token0: z.ZodString;
        poolBalanceToken0: z.ZodNumber;
        token1: z.ZodString;
        poolBalanceToken1: z.ZodNumber;
        symbolToken0: z.ZodString;
        symbolToken1: z.ZodString;
        tvl: z.ZodNullable<z.ZodNumber>;
        almDetails: z.ZodOptional<z.ZodArray<z.ZodObject<{
            balance0: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            balance1: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            origin: z.ZodNumber;
            tvl: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            origin: number;
            balance0?: number | null | undefined;
            balance1?: number | null | undefined;
            tvl?: number | null | undefined;
        }, {
            origin: number;
            balance0?: number | null | undefined;
            balance1?: number | null | undefined;
            tvl?: number | null | undefined;
        }>, "many">>;
        userTVL: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        userBalanceToken0: z.ZodOptional<z.ZodNumber>;
        userBalanceToken1: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>>;
    signed: z.ZodOptional<z.ZodBoolean>;
    transactionData: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        claim: z.ZodString;
        leaf: z.ZodString;
        token: z.ZodString;
        proof: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        token: string;
        claim: string;
        leaf: string;
        proof: string[];
    }, {
        token: string;
        claim: string;
        leaf: string;
        proof: string[];
    }>>>;
    validRewardTokens: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodCatch<z.ZodObject<{
        minimumAmountPerEpoch: z.ZodNumber;
        token: z.ZodString;
        decimals: z.ZodNumber;
        symbol: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        token: string;
        decimals: number;
        minimumAmountPerEpoch: number;
    }, {
        symbol: string;
        token: string;
        decimals: number;
        minimumAmountPerEpoch: number;
    }>>, "many">, {
        symbol: string;
        token: string;
        decimals: number;
        minimumAmountPerEpoch: number;
    }[], unknown[]>>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
    validRewardTokens?: unknown[] | undefined;
}>>, "many">;
export declare const angleRewardTokensValidator: z.ZodObject<{
    validRewardTokens: z.ZodEffects<z.ZodArray<z.ZodCatch<z.ZodObject<{
        minimumAmountPerEpoch: z.ZodNumber;
        token: z.ZodString;
        decimals: z.ZodNumber;
        symbol: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        token: string;
        decimals: number;
        minimumAmountPerEpoch: number;
    }, {
        symbol: string;
        token: string;
        decimals: number;
        minimumAmountPerEpoch: number;
    }>>, "many">, {
        symbol: string;
        token: string;
        decimals: number;
        minimumAmountPerEpoch: number;
    }[], unknown[]>;
}, "strip", z.ZodTypeAny, {
    validRewardTokens: {
        symbol: string;
        token: string;
        decimals: number;
        minimumAmountPerEpoch: number;
    }[];
}, {
    validRewardTokens: unknown[];
}>;
//# sourceMappingURL=validator.d.ts.map