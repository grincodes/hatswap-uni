import z from 'zod';
export declare const tokenValidator: z.ZodObject<{
    id: z.ZodString;
    address: z.ZodString;
    chainId: z.ZodNumber;
    decimals: z.ZodNumber;
    name: z.ZodString;
    symbol: z.ZodString;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    name: string;
    id: string;
    chainId: number;
    address: string;
    decimals: number;
}, {
    symbol: string;
    name: string;
    id: string;
    chainId: number;
    address: string;
    decimals: number;
}>;
export declare const tokenListValidator: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    address: z.ZodString;
    chainId: z.ZodNumber;
    decimals: z.ZodNumber;
    name: z.ZodString;
    symbol: z.ZodString;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    name: string;
    id: string;
    chainId: number;
    address: string;
    decimals: number;
}, {
    symbol: string;
    name: string;
    id: string;
    chainId: number;
    address: string;
    decimals: number;
}>, "many">;
export declare const otherTokenListValidator: z.ZodObject<{
    tokens: z.ZodArray<z.ZodObject<{
        address: z.ZodEffects<z.ZodString, string, string>;
        chainId: z.ZodNumber;
        decimals: z.ZodNumber;
        name: z.ZodString;
        symbol: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        name: string;
        chainId: number;
        address: string;
        decimals: number;
    }, {
        symbol: string;
        name: string;
        chainId: number;
        address: string;
        decimals: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    tokens: {
        symbol: string;
        name: string;
        chainId: number;
        address: string;
        decimals: number;
    }[];
}, {
    tokens: {
        symbol: string;
        name: string;
        chainId: number;
        address: string;
        decimals: number;
    }[];
}>;
//# sourceMappingURL=validator.d.ts.map