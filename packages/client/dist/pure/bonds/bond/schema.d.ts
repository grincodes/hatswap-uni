import { z } from 'zod';
export declare const BondApiSchema: z.ZodObject<{
    marketId: z.ZodEffects<z.ZodString, {
        chainId: 1 | 42161 | 10 | 137;
        auctioneerAddress: `0x${string}`;
        marketNumber: bigint;
    }, string>;
}, "strip", z.ZodTypeAny, {
    marketId: {
        chainId: 1 | 42161 | 10 | 137;
        auctioneerAddress: `0x${string}`;
        marketNumber: bigint;
    };
}, {
    marketId: string;
}>;
//# sourceMappingURL=schema.d.ts.map