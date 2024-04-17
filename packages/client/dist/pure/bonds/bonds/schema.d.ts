import { AuctionType } from '@sushiswap/bonds-sdk';
import type { ChainId } from 'sushi/chain';
import { z } from 'zod';
export declare const BondsApiSchema: z.ZodObject<{
    take: z.ZodDefault<z.ZodNumber>;
    ids: z.ZodOptional<z.ZodEffects<z.ZodString, {
        chainId: 1 | 42161 | 10 | 137;
        auctioneerAddress: `0x${string}`;
        marketNumber: bigint;
    }[], string>>;
    chainIds: z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, ChainId[], string | undefined>, (1 | 42161 | 10 | 137)[], string | undefined>;
    issuerNames: z.ZodOptional<z.ZodEffects<z.ZodString, string[], string>>;
    anyIssuer: z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, string, string | undefined>, boolean, string | undefined>;
    onlyOpen: z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, string, string | undefined>, boolean, string | undefined>;
    onlyDiscounted: z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, string, string | undefined>, boolean, string | undefined>;
    auctionTypes: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, string[], string | undefined>, string[], string | undefined>, AuctionType[], string | undefined>;
    orderBy: z.ZodDefault<z.ZodString>;
    orderDir: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    take: number;
    chainIds: (1 | 42161 | 10 | 137)[];
    anyIssuer: boolean;
    onlyOpen: boolean;
    onlyDiscounted: boolean;
    auctionTypes: AuctionType[];
    orderBy: string;
    orderDir: "asc" | "desc";
    ids?: {
        chainId: 1 | 42161 | 10 | 137;
        auctioneerAddress: `0x${string}`;
        marketNumber: bigint;
    }[] | undefined;
    issuerNames?: string[] | undefined;
}, {
    take?: number | undefined;
    ids?: string | undefined;
    chainIds?: string | undefined;
    issuerNames?: string | undefined;
    anyIssuer?: string | undefined;
    onlyOpen?: string | undefined;
    onlyDiscounted?: string | undefined;
    auctionTypes?: string | undefined;
    orderBy?: string | undefined;
    orderDir?: "asc" | "desc" | undefined;
}>;
//# sourceMappingURL=schema.d.ts.map