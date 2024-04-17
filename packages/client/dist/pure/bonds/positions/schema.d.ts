import type { ChainId } from 'sushi/chain';
import { z } from 'zod';
export declare const BondsPositionsApiSchema: z.ZodObject<{
    userAddress: z.ZodEffects<z.ZodString, string, string>;
    onlyUnclaimedBonds: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, boolean, string | undefined>;
    payoutTokenId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    chainIds: z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, ChainId[], string | undefined>, (1 | 42161 | 10 | 137)[], string | undefined>;
}, "strip", z.ZodTypeAny, {
    chainIds: (1 | 42161 | 10 | 137)[];
    userAddress: string;
    onlyUnclaimedBonds: boolean;
    payoutTokenId?: string | undefined;
}, {
    userAddress: string;
    onlyUnclaimedBonds?: string | undefined;
    payoutTokenId?: string | undefined;
    chainIds?: string | undefined;
}>;
//# sourceMappingURL=schema.d.ts.map