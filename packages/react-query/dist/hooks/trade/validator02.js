import { PoolType } from 'sushi/tines';
import z from 'zod';
export const tokenValidator = z.object({
    address: z.string(),
    symbol: z.string(),
    name: z.string(),
    decimals: z.number(),
});
export const legValidator = z.object({
    poolAddress: z.string(),
    poolType: z.nativeEnum(PoolType),
    poolName: z.string(),
    poolFee: z.number(),
    tokenFrom: z.number(),
    tokenTo: z.number(),
    share: z.number(),
    assumedAmountIn: z.string(),
    assumedAmountOut: z.string(),
});
const routeExistValidator = z.object({
    status: z.enum(['Success', 'Partial']),
    tokens: z.array(tokenValidator),
    tokenFrom: z.number(),
    tokenTo: z.number(),
    primaryPrice: z.number(),
    swapPrice: z.number(),
    priceImpact: z.number(),
    amountIn: z.string(),
    assumedAmountOut: z.string(),
    gasSpent: z.number(),
    route: z.array(legValidator),
    routeProcessorAddr: z.string().optional(),
    routeProcessorArgs: z
        .object({
        tokenIn: z.string(),
        amountIn: z.string(),
        tokenOut: z.string(),
        amountOutMin: z.string(),
        to: z.string(),
        routeCode: z.string(),
        value: z.string().optional(),
    })
        .optional(),
});
const routeDontExistValidator = z.object({
    status: z.enum(['NoWay']),
});
export const tradeValidator02 = z.union([
    routeExistValidator,
    routeDontExistValidator,
]);
//# sourceMappingURL=validator02.js.map