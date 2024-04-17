import { z } from 'zod';
export declare const PoolsApiSchema: z.ZodObject<{
    take: z.ZodDefault<z.ZodNumber>;
    ids: z.ZodOptional<z.ZodEffects<z.ZodString, string[], string>>;
    chainIds: z.ZodOptional<z.ZodEffects<z.ZodString, number[], string>>;
    isIncentivized: z.ZodOptional<z.ZodEffects<z.ZodString, boolean, string>>;
    isWhitelisted: z.ZodOptional<z.ZodEffects<z.ZodString, boolean, string>>;
    hasEnabledSteerVault: z.ZodOptional<z.ZodEffects<z.ZodString, boolean, string>>;
    tokenSymbols: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodString, string[], string>, string[], string>>;
    protocols: z.ZodOptional<z.ZodEffects<z.ZodString, import("@sushiswap/database").$Enums.Protocol[], string>>;
    cursor: z.ZodOptional<z.ZodString>;
    orderBy: z.ZodDefault<z.ZodString>;
    orderDir: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    take: number;
    orderBy: string;
    orderDir: "asc" | "desc";
    ids?: string[] | undefined;
    chainIds?: number[] | undefined;
    isIncentivized?: boolean | undefined;
    isWhitelisted?: boolean | undefined;
    hasEnabledSteerVault?: boolean | undefined;
    tokenSymbols?: string[] | undefined;
    protocols?: import("@sushiswap/database").$Enums.Protocol[] | undefined;
    cursor?: string | undefined;
}, {
    take?: number | undefined;
    ids?: string | undefined;
    chainIds?: string | undefined;
    isIncentivized?: string | undefined;
    isWhitelisted?: string | undefined;
    hasEnabledSteerVault?: string | undefined;
    tokenSymbols?: string | undefined;
    protocols?: string | undefined;
    cursor?: string | undefined;
    orderBy?: string | undefined;
    orderDir?: "asc" | "desc" | undefined;
}>;
//# sourceMappingURL=schema.d.ts.map