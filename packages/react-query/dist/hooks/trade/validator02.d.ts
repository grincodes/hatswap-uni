import { PoolType } from 'sushi/tines';
import z from 'zod';
export declare const tokenValidator: z.ZodObject<{
    address: z.ZodString;
    symbol: z.ZodString;
    name: z.ZodString;
    decimals: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    name: string;
    address: string;
    decimals: number;
}, {
    symbol: string;
    name: string;
    address: string;
    decimals: number;
}>;
export declare const legValidator: z.ZodObject<{
    poolAddress: z.ZodString;
    poolType: z.ZodNativeEnum<typeof PoolType>;
    poolName: z.ZodString;
    poolFee: z.ZodNumber;
    tokenFrom: z.ZodNumber;
    tokenTo: z.ZodNumber;
    share: z.ZodNumber;
    assumedAmountIn: z.ZodString;
    assumedAmountOut: z.ZodString;
}, "strip", z.ZodTypeAny, {
    poolFee: number;
    poolAddress: string;
    poolType: PoolType;
    tokenFrom: number;
    tokenTo: number;
    assumedAmountIn: string;
    assumedAmountOut: string;
    poolName: string;
    share: number;
}, {
    poolFee: number;
    poolAddress: string;
    poolType: PoolType;
    tokenFrom: number;
    tokenTo: number;
    assumedAmountIn: string;
    assumedAmountOut: string;
    poolName: string;
    share: number;
}>;
export declare const tradeValidator02: z.ZodUnion<[z.ZodObject<{
    status: z.ZodEnum<["Success", "Partial"]>;
    tokens: z.ZodArray<z.ZodObject<{
        address: z.ZodString;
        symbol: z.ZodString;
        name: z.ZodString;
        decimals: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        name: string;
        address: string;
        decimals: number;
    }, {
        symbol: string;
        name: string;
        address: string;
        decimals: number;
    }>, "many">;
    tokenFrom: z.ZodNumber;
    tokenTo: z.ZodNumber;
    primaryPrice: z.ZodNumber;
    swapPrice: z.ZodNumber;
    priceImpact: z.ZodNumber;
    amountIn: z.ZodString;
    assumedAmountOut: z.ZodString;
    gasSpent: z.ZodNumber;
    route: z.ZodArray<z.ZodObject<{
        poolAddress: z.ZodString;
        poolType: z.ZodNativeEnum<typeof PoolType>;
        poolName: z.ZodString;
        poolFee: z.ZodNumber;
        tokenFrom: z.ZodNumber;
        tokenTo: z.ZodNumber;
        share: z.ZodNumber;
        assumedAmountIn: z.ZodString;
        assumedAmountOut: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        poolFee: number;
        poolAddress: string;
        poolType: PoolType;
        tokenFrom: number;
        tokenTo: number;
        assumedAmountIn: string;
        assumedAmountOut: string;
        poolName: string;
        share: number;
    }, {
        poolFee: number;
        poolAddress: string;
        poolType: PoolType;
        tokenFrom: number;
        tokenTo: number;
        assumedAmountIn: string;
        assumedAmountOut: string;
        poolName: string;
        share: number;
    }>, "many">;
    routeProcessorAddr: z.ZodOptional<z.ZodString>;
    routeProcessorArgs: z.ZodOptional<z.ZodObject<{
        tokenIn: z.ZodString;
        amountIn: z.ZodString;
        tokenOut: z.ZodString;
        amountOutMin: z.ZodString;
        to: z.ZodString;
        routeCode: z.ZodString;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        to: string;
        amountIn: string;
        amountOutMin: string;
        tokenIn: string;
        tokenOut: string;
        routeCode: string;
        value?: string | undefined;
    }, {
        to: string;
        amountIn: string;
        amountOutMin: string;
        tokenIn: string;
        tokenOut: string;
        routeCode: string;
        value?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    status: "Success" | "Partial";
    tokens: {
        symbol: string;
        name: string;
        address: string;
        decimals: number;
    }[];
    tokenFrom: number;
    tokenTo: number;
    assumedAmountOut: string;
    primaryPrice: number;
    swapPrice: number;
    priceImpact: number;
    amountIn: string;
    gasSpent: number;
    route: {
        poolFee: number;
        poolAddress: string;
        poolType: PoolType;
        tokenFrom: number;
        tokenTo: number;
        assumedAmountIn: string;
        assumedAmountOut: string;
        poolName: string;
        share: number;
    }[];
    routeProcessorAddr?: string | undefined;
    routeProcessorArgs?: {
        to: string;
        amountIn: string;
        amountOutMin: string;
        tokenIn: string;
        tokenOut: string;
        routeCode: string;
        value?: string | undefined;
    } | undefined;
}, {
    status: "Success" | "Partial";
    tokens: {
        symbol: string;
        name: string;
        address: string;
        decimals: number;
    }[];
    tokenFrom: number;
    tokenTo: number;
    assumedAmountOut: string;
    primaryPrice: number;
    swapPrice: number;
    priceImpact: number;
    amountIn: string;
    gasSpent: number;
    route: {
        poolFee: number;
        poolAddress: string;
        poolType: PoolType;
        tokenFrom: number;
        tokenTo: number;
        assumedAmountIn: string;
        assumedAmountOut: string;
        poolName: string;
        share: number;
    }[];
    routeProcessorAddr?: string | undefined;
    routeProcessorArgs?: {
        to: string;
        amountIn: string;
        amountOutMin: string;
        tokenIn: string;
        tokenOut: string;
        routeCode: string;
        value?: string | undefined;
    } | undefined;
}>, z.ZodObject<{
    status: z.ZodEnum<["NoWay"]>;
}, "strip", z.ZodTypeAny, {
    status: "NoWay";
}, {
    status: "NoWay";
}>]>;
//# sourceMappingURL=validator02.d.ts.map