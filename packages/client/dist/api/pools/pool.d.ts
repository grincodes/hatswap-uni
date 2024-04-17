import type * as _ from '@prisma/client';
import { type PoolApiSchema } from '../../pure/pools/pool/schema';
export declare function getPoolFromDB(args: typeof PoolApiSchema._output): Promise<import("@sushiswap/database").DecimalToString<{
    isIncentivized: boolean;
    hasEnabledSteerVault: boolean;
    liquidityUSD: import("@prisma/client/runtime/library").Decimal;
    id: string;
    address: string;
    chainId: number;
    name: string;
    incentives: {
        id: string;
        chainId: number;
        chefType: _.$Enums.ChefType;
        apr: number;
        rewardPerDay: number;
        pid: number;
        rewarderAddress: string;
        rewarderType: _.$Enums.RewarderType;
        rewardToken: {
            symbol: string;
            id: string;
            address: string;
            name: string;
            decimals: number;
        };
    }[];
    token1: {
        symbol: string;
        id: string;
        address: string;
        name: string;
        decimals: number;
    };
    token0: {
        symbol: string;
        id: string;
        address: string;
        name: string;
        decimals: number;
    };
    protocol: _.$Enums.Protocol;
    swapFee: number;
    twapEnabled: boolean;
    totalSupply: string;
    volumeUSD: import("@prisma/client/runtime/library").Decimal;
    liquidityUSDChange1h: number;
    liquidityUSDChange1d: number;
    liquidityUSDChange1w: number;
    liquidityUSDChange1m: number;
    volume1h: import("@prisma/client/runtime/library").Decimal;
    volume1d: import("@prisma/client/runtime/library").Decimal;
    volume1w: import("@prisma/client/runtime/library").Decimal;
    volume1m: import("@prisma/client/runtime/library").Decimal;
    volumeChange1h: number;
    volumeChange1d: number;
    volumeChange1w: number;
    volumeChange1m: number;
    fees1h: import("@prisma/client/runtime/library").Decimal;
    fees1d: import("@prisma/client/runtime/library").Decimal;
    fees1w: import("@prisma/client/runtime/library").Decimal;
    fees1m: import("@prisma/client/runtime/library").Decimal;
    feesChange1h: number;
    feesChange1d: number;
    feesChange1w: number;
    feesChange1m: number;
    feeApr1h: number;
    feeApr1d: number;
    feeApr1w: number;
    feeApr1m: number;
    totalApr1h: number;
    totalApr1d: number;
    totalApr1w: number;
    totalApr1m: number;
    incentiveApr: number;
    wasIncentivized: boolean;
    hadEnabledSteerVault: boolean;
    isBlacklisted: boolean;
    steerVaults: {
        id: string;
        address: string;
        chainId: number;
        token1: {
            symbol: string;
            id: string;
            address: string;
            name: string;
            decimals: number;
        };
        token0: {
            symbol: string;
            id: string;
            address: string;
            name: string;
            decimals: number;
        };
        reserve0: string;
        reserve1: string;
        feesUSD: import("@prisma/client/runtime/library").Decimal;
        apr: number;
        feeTier: number;
        apr1w: number;
        apr1d: number;
        reserve0USD: import("@prisma/client/runtime/library").Decimal;
        fees0: string;
        fees0USD: import("@prisma/client/runtime/library").Decimal;
        reserve1USD: import("@prisma/client/runtime/library").Decimal;
        fees1: string;
        fees1USD: import("@prisma/client/runtime/library").Decimal;
        reserveUSD: import("@prisma/client/runtime/library").Decimal;
        strategy: _.$Enums.SteerStrategy;
        payloadHash: string;
        performanceFee: number;
        lowerTick: number;
        upperTick: number;
        adjustmentFrequency: number;
        lastAdjustmentTimestamp: number;
        isEnabled: boolean;
        wasEnabled: boolean;
        isDeprecated: boolean;
        creator: string;
        admin: string;
        manager: string;
    }[];
}>>;
//# sourceMappingURL=pool.d.ts.map