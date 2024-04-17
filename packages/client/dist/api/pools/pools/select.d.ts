export declare const SushiPoolSelect: {
    readonly id: true;
    readonly address: true;
    readonly name: true;
    readonly chainId: true;
    readonly protocol: true;
    readonly swapFee: true;
    readonly twapEnabled: true;
    readonly totalSupply: true;
    readonly liquidityUSD: true;
    readonly volumeUSD: true;
    readonly feeApr1h: true;
    readonly feeApr1d: true;
    readonly feeApr1w: true;
    readonly feeApr1m: true;
    readonly totalApr1h: true;
    readonly totalApr1d: true;
    readonly totalApr1w: true;
    readonly totalApr1m: true;
    readonly incentiveApr: true;
    readonly isIncentivized: true;
    readonly wasIncentivized: true;
    readonly fees1h: true;
    readonly fees1d: true;
    readonly fees1w: true;
    readonly fees1m: true;
    readonly feesChange1h: true;
    readonly feesChange1d: true;
    readonly feesChange1w: true;
    readonly feesChange1m: true;
    readonly volume1h: true;
    readonly volume1d: true;
    readonly volume1w: true;
    readonly volume1m: true;
    readonly volumeChange1h: true;
    readonly volumeChange1d: true;
    readonly volumeChange1w: true;
    readonly volumeChange1m: true;
    readonly liquidityUSDChange1h: true;
    readonly liquidityUSDChange1d: true;
    readonly liquidityUSDChange1w: true;
    readonly liquidityUSDChange1m: true;
    readonly isBlacklisted: true;
    readonly token0: {
        readonly select: {
            readonly id: true;
            readonly address: true;
            readonly name: true;
            readonly symbol: true;
            readonly decimals: true;
        };
    };
    readonly token1: {
        readonly select: {
            readonly id: true;
            readonly address: true;
            readonly name: true;
            readonly symbol: true;
            readonly decimals: true;
        };
    };
    readonly incentives: {
        readonly select: {
            readonly id: true;
            readonly pid: true;
            readonly chainId: true;
            readonly chefType: true;
            readonly apr: true;
            readonly rewarderAddress: true;
            readonly rewarderType: true;
            readonly rewardPerDay: true;
            readonly rewardToken: {
                readonly select: {
                    readonly id: true;
                    readonly address: true;
                    readonly name: true;
                    readonly symbol: true;
                    readonly decimals: true;
                };
            };
        };
    };
    readonly hadEnabledSteerVault: true;
    readonly hasEnabledSteerVault: true;
    readonly steerVaults: {
        readonly select: {
            readonly id: true;
            readonly address: true;
            readonly chainId: true;
            readonly feeTier: true;
            readonly apr: true;
            readonly apr1d: true;
            readonly apr1w: true;
            readonly token0: {
                readonly select: {
                    readonly id: true;
                    readonly address: true;
                    readonly name: true;
                    readonly symbol: true;
                    readonly decimals: true;
                };
            };
            readonly reserve0: true;
            readonly reserve0USD: true;
            readonly fees0: true;
            readonly fees0USD: true;
            readonly token1: {
                readonly select: {
                    readonly id: true;
                    readonly address: true;
                    readonly name: true;
                    readonly symbol: true;
                    readonly decimals: true;
                };
            };
            readonly reserve1: true;
            readonly reserve1USD: true;
            readonly fees1: true;
            readonly fees1USD: true;
            readonly reserveUSD: true;
            readonly feesUSD: true;
            readonly strategy: true;
            readonly payloadHash: true;
            readonly performanceFee: true;
            readonly lowerTick: true;
            readonly upperTick: true;
            readonly adjustmentFrequency: true;
            readonly lastAdjustmentTimestamp: true;
            readonly isEnabled: true;
            readonly wasEnabled: true;
            readonly isDeprecated: true;
            readonly creator: true;
            readonly admin: true;
            readonly manager: true;
        };
    };
};
//# sourceMappingURL=select.d.ts.map