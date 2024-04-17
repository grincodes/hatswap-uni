import { z } from 'zod';
export declare const SteerVaultCountApiSchema: z.ZodObject<{
    chainIds: z.ZodOptional<z.ZodEffects<z.ZodString, number[], string>>;
    onlyEnabled: z.ZodOptional<z.ZodEffects<z.ZodString, boolean, string>>;
}, "strip", z.ZodTypeAny, {
    chainIds?: number[] | undefined;
    onlyEnabled?: boolean | undefined;
}, {
    chainIds?: string | undefined;
    onlyEnabled?: string | undefined;
}>;
//# sourceMappingURL=schema.d.ts.map