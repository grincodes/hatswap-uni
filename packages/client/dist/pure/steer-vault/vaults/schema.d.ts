import { z } from 'zod';
export declare const SteerVaultsApiSchema: z.ZodObject<{
    take: z.ZodDefault<z.ZodNumber>;
    ids: z.ZodOptional<z.ZodEffects<z.ZodString, string[], string>>;
    chainIds: z.ZodOptional<z.ZodEffects<z.ZodString, number[], string>>;
    onlyEnabled: z.ZodOptional<z.ZodEffects<z.ZodString, boolean, string>>;
    tokenSymbols: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodString, string[], string>, string[], string>>;
    cursor: z.ZodOptional<z.ZodString>;
    orderBy: z.ZodDefault<z.ZodString>;
    orderDir: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    take: number;
    orderBy: string;
    orderDir: "asc" | "desc";
    ids?: string[] | undefined;
    chainIds?: number[] | undefined;
    onlyEnabled?: boolean | undefined;
    tokenSymbols?: string[] | undefined;
    cursor?: string | undefined;
}, {
    take?: number | undefined;
    ids?: string | undefined;
    chainIds?: string | undefined;
    onlyEnabled?: string | undefined;
    tokenSymbols?: string | undefined;
    cursor?: string | undefined;
    orderBy?: string | undefined;
    orderDir?: "asc" | "desc" | undefined;
}>;
//# sourceMappingURL=schema.d.ts.map