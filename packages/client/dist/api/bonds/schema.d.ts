import { z } from 'zod';
export declare const BondSchema: z.ZodObject<{
    id: z.ZodString;
    chainId: z.ZodNumber;
    type: z.ZodEffects<z.ZodString, "Static" | "Dynamic", string>;
    auctioneer: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    teller: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    marketId: z.ZodEffects<z.ZodString, bigint, string>;
    owner: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    capacity: z.ZodEffects<z.ZodString, bigint, string>;
    capacityInQuote: z.ZodBoolean;
    hasClosed: z.ZodBoolean;
    start: z.ZodNullable<z.ZodEffects<z.ZodString, bigint, string>>;
    conclusion: z.ZodNullable<z.ZodEffects<z.ZodString, bigint, string>>;
    vesting: z.ZodEffects<z.ZodString, bigint, string>;
    vestingType: z.ZodEffects<z.ZodString, "Fixed-Term", string>;
    quoteToken: z.ZodObject<{
        address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        name: z.ZodString;
        symbol: z.ZodString;
        decimals: z.ZodEffects<z.ZodString, bigint, string>;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        address: `0x${string}`;
        name: string;
        decimals: bigint;
    }, {
        symbol: string;
        address: string;
        name: string;
        decimals: string;
    }>;
    totalBondedAmount: z.ZodNumber;
    payoutToken: z.ZodObject<{
        address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        name: z.ZodString;
        symbol: z.ZodString;
        decimals: z.ZodEffects<z.ZodString, bigint, string>;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        address: `0x${string}`;
        name: string;
        decimals: bigint;
    }, {
        symbol: string;
        address: string;
        name: string;
        decimals: string;
    }>;
    totalPayoutAmount: z.ZodNumber;
    minPrice: z.ZodNullable<z.ZodEffects<z.ZodString, bigint, string>>;
    scale: z.ZodNullable<z.ZodEffects<z.ZodString, bigint, string>>;
    averageBondPrice: z.ZodNumber;
    bondsIssued: z.ZodEffects<z.ZodString, bigint, string>;
}, "strip", z.ZodTypeAny, {
    type: "Static" | "Dynamic";
    id: string;
    chainId: number;
    owner: `0x${string}`;
    auctioneer: `0x${string}`;
    teller: `0x${string}`;
    marketId: bigint;
    capacity: bigint;
    capacityInQuote: boolean;
    hasClosed: boolean;
    start: bigint | null;
    conclusion: bigint | null;
    vesting: bigint;
    vestingType: "Fixed-Term";
    quoteToken: {
        symbol: string;
        address: `0x${string}`;
        name: string;
        decimals: bigint;
    };
    totalBondedAmount: number;
    payoutToken: {
        symbol: string;
        address: `0x${string}`;
        name: string;
        decimals: bigint;
    };
    totalPayoutAmount: number;
    minPrice: bigint | null;
    scale: bigint | null;
    averageBondPrice: number;
    bondsIssued: bigint;
}, {
    type: string;
    id: string;
    chainId: number;
    owner: string;
    auctioneer: string;
    teller: string;
    marketId: string;
    capacity: string;
    capacityInQuote: boolean;
    hasClosed: boolean;
    start: string | null;
    conclusion: string | null;
    vesting: string;
    vestingType: string;
    quoteToken: {
        symbol: string;
        address: string;
        name: string;
        decimals: string;
    };
    totalBondedAmount: number;
    payoutToken: {
        symbol: string;
        address: string;
        name: string;
        decimals: string;
    };
    totalPayoutAmount: number;
    minPrice: string | null;
    scale: string | null;
    averageBondPrice: number;
    bondsIssued: string;
}>;
export declare const BondPositionSchema: z.ZodObject<{
    owner: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    chainId: z.ZodNumber;
    balance: z.ZodEffects<z.ZodString, bigint, string>;
    bondToken: z.ZodObject<{
        id: z.ZodString;
        expiry: z.ZodEffects<z.ZodString, bigint, string>;
        type: z.ZodString;
        teller: z.ZodString;
        underlying: z.ZodObject<{
            address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            name: z.ZodString;
            symbol: z.ZodString;
            decimals: z.ZodEffects<z.ZodString, bigint, string>;
        }, "strip", z.ZodTypeAny, {
            symbol: string;
            address: `0x${string}`;
            name: string;
            decimals: bigint;
        }, {
            symbol: string;
            address: string;
            name: string;
            decimals: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
        teller: string;
        expiry: bigint;
        underlying: {
            symbol: string;
            address: `0x${string}`;
            name: string;
            decimals: bigint;
        };
    }, {
        type: string;
        id: string;
        teller: string;
        expiry: string;
        underlying: {
            symbol: string;
            address: string;
            name: string;
            decimals: string;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    chainId: number;
    balance: bigint;
    owner: `0x${string}`;
    bondToken: {
        type: string;
        id: string;
        teller: string;
        expiry: bigint;
        underlying: {
            symbol: string;
            address: `0x${string}`;
            name: string;
            decimals: bigint;
        };
    };
}, {
    chainId: number;
    balance: string;
    owner: string;
    bondToken: {
        type: string;
        id: string;
        teller: string;
        expiry: string;
        underlying: {
            symbol: string;
            address: string;
            name: string;
            decimals: string;
        };
    };
}>;
//# sourceMappingURL=schema.d.ts.map