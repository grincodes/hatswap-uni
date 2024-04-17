import { z } from 'zod';
export declare const PoolCountApiSchema: z.ZodObject<{
    chainIds: z.ZodOptional<z.ZodEffects<z.ZodString, number[], string>>;
    isIncentivized: z.ZodOptional<z.ZodEffects<z.ZodString, boolean, string>>;
    isWhitelisted: z.ZodOptional<z.ZodEffects<z.ZodString, boolean, string>>;
    hasEnabledSteerVault: z.ZodOptional<z.ZodEffects<z.ZodString, boolean, string>>;
    tokenSymbols: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodString, string[], string>, string[], string>>;
    protocols: z.ZodEffects<z.ZodOptional<z.ZodString>, import("@sushiswap/database").$Enums.Protocol[], string | undefined>;
}, "strip", z.ZodTypeAny, {
    protocols: import("@sushiswap/database").$Enums.Protocol[];
    chainIds?: number[] | undefined;
    isIncentivized?: boolean | undefined;
    isWhitelisted?: boolean | undefined;
    hasEnabledSteerVault?: boolean | undefined;
    tokenSymbols?: string[] | undefined;
}, {
    chainIds?: string | undefined;
    isIncentivized?: string | undefined;
    isWhitelisted?: string | undefined;
    hasEnabledSteerVault?: string | undefined;
    tokenSymbols?: string | undefined;
    protocols?: string | undefined;
}>;
//# sourceMappingURL=schema.d.ts.map