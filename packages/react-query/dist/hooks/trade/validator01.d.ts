import z from 'zod';
export declare const tokenValidator: z.ZodObject<{
    chainId: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
    decimals: z.ZodOptional<z.ZodNumber>;
    symbol: z.ZodString;
    name: z.ZodString;
    isNative: z.ZodOptional<z.ZodBoolean>;
    isToken: z.ZodOptional<z.ZodBoolean>;
    address: z.ZodOptional<z.ZodString>;
    tokenId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    name: string;
    chainId: string | number;
    decimals?: number | undefined;
    isNative?: boolean | undefined;
    isToken?: boolean | undefined;
    address?: string | undefined;
    tokenId?: string | undefined;
}, {
    symbol: string;
    name: string;
    chainId: string | number;
    decimals?: number | undefined;
    isNative?: boolean | undefined;
    isToken?: boolean | undefined;
    address?: string | undefined;
    tokenId?: string | undefined;
}>;
export declare const legValidator: z.ZodObject<{
    poolAddress: z.ZodString;
    poolType: z.ZodEnum<["Classic", "Stable", "Unknown"]>;
    poolFee: z.ZodNumber;
    tokenFrom: z.ZodObject<{
        chainId: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
        decimals: z.ZodOptional<z.ZodNumber>;
        symbol: z.ZodString;
        name: z.ZodString;
        isNative: z.ZodOptional<z.ZodBoolean>;
        isToken: z.ZodOptional<z.ZodBoolean>;
        address: z.ZodOptional<z.ZodString>;
        tokenId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        name: string;
        chainId: string | number;
        decimals?: number | undefined;
        isNative?: boolean | undefined;
        isToken?: boolean | undefined;
        address?: string | undefined;
        tokenId?: string | undefined;
    }, {
        symbol: string;
        name: string;
        chainId: string | number;
        decimals?: number | undefined;
        isNative?: boolean | undefined;
        isToken?: boolean | undefined;
        address?: string | undefined;
        tokenId?: string | undefined;
    }>;
    tokenTo: z.ZodObject<{
        chainId: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
        decimals: z.ZodOptional<z.ZodNumber>;
        symbol: z.ZodString;
        name: z.ZodString;
        isNative: z.ZodOptional<z.ZodBoolean>;
        isToken: z.ZodOptional<z.ZodBoolean>;
        address: z.ZodOptional<z.ZodString>;
        tokenId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        name: string;
        chainId: string | number;
        decimals?: number | undefined;
        isNative?: boolean | undefined;
        isToken?: boolean | undefined;
        address?: string | undefined;
        tokenId?: string | undefined;
    }, {
        symbol: string;
        name: string;
        chainId: string | number;
        decimals?: number | undefined;
        isNative?: boolean | undefined;
        isToken?: boolean | undefined;
        address?: string | undefined;
        tokenId?: string | undefined;
    }>;
    assumedAmountIn: z.ZodNumber;
    assumedAmountOut: z.ZodNumber;
    swapPortion: z.ZodNumber;
    absolutePortion: z.ZodNumber;
    poolName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    poolFee: number;
    poolAddress: string;
    poolType: "Classic" | "Stable" | "Unknown";
    tokenFrom: {
        symbol: string;
        name: string;
        chainId: string | number;
        decimals?: number | undefined;
        isNative?: boolean | undefined;
        isToken?: boolean | undefined;
        address?: string | undefined;
        tokenId?: string | undefined;
    };
    tokenTo: {
        symbol: string;
        name: string;
        chainId: string | number;
        decimals?: number | undefined;
        isNative?: boolean | undefined;
        isToken?: boolean | undefined;
        address?: string | undefined;
        tokenId?: string | undefined;
    };
    assumedAmountIn: number;
    assumedAmountOut: number;
    swapPortion: number;
    absolutePortion: number;
    poolName: string;
}, {
    poolFee: number;
    poolAddress: string;
    poolType: "Classic" | "Stable" | "Unknown";
    tokenFrom: {
        symbol: string;
        name: string;
        chainId: string | number;
        decimals?: number | undefined;
        isNative?: boolean | undefined;
        isToken?: boolean | undefined;
        address?: string | undefined;
        tokenId?: string | undefined;
    };
    tokenTo: {
        symbol: string;
        name: string;
        chainId: string | number;
        decimals?: number | undefined;
        isNative?: boolean | undefined;
        isToken?: boolean | undefined;
        address?: string | undefined;
        tokenId?: string | undefined;
    };
    assumedAmountIn: number;
    assumedAmountOut: number;
    swapPortion: number;
    absolutePortion: number;
    poolName: string;
}>;
export declare const tradeValidator01: z.ZodObject<{
    route: z.ZodOptional<z.ZodObject<{
        status: z.ZodString;
        fromToken: z.ZodObject<{
            chainId: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
            decimals: z.ZodOptional<z.ZodNumber>;
            symbol: z.ZodString;
            name: z.ZodString;
            isNative: z.ZodOptional<z.ZodBoolean>;
            isToken: z.ZodOptional<z.ZodBoolean>;
            address: z.ZodOptional<z.ZodString>;
            tokenId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            symbol: string;
            name: string;
            chainId: string | number;
            decimals?: number | undefined;
            isNative?: boolean | undefined;
            isToken?: boolean | undefined;
            address?: string | undefined;
            tokenId?: string | undefined;
        }, {
            symbol: string;
            name: string;
            chainId: string | number;
            decimals?: number | undefined;
            isNative?: boolean | undefined;
            isToken?: boolean | undefined;
            address?: string | undefined;
            tokenId?: string | undefined;
        }>;
        toToken: z.ZodObject<{
            chainId: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
            decimals: z.ZodOptional<z.ZodNumber>;
            symbol: z.ZodString;
            name: z.ZodString;
            isNative: z.ZodOptional<z.ZodBoolean>;
            isToken: z.ZodOptional<z.ZodBoolean>;
            address: z.ZodOptional<z.ZodString>;
            tokenId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            symbol: string;
            name: string;
            chainId: string | number;
            decimals?: number | undefined;
            isNative?: boolean | undefined;
            isToken?: boolean | undefined;
            address?: string | undefined;
            tokenId?: string | undefined;
        }, {
            symbol: string;
            name: string;
            chainId: string | number;
            decimals?: number | undefined;
            isNative?: boolean | undefined;
            isToken?: boolean | undefined;
            address?: string | undefined;
            tokenId?: string | undefined;
        }>;
        primaryPrice: z.ZodOptional<z.ZodNumber>;
        swapPrice: z.ZodOptional<z.ZodNumber>;
        priceImpact: z.ZodOptional<z.ZodNumber>;
        amountIn: z.ZodNumber;
        amountInBI: z.ZodBigInt;
        amountOut: z.ZodNumber;
        amountOutBI: z.ZodBigInt;
        legs: z.ZodOptional<z.ZodArray<z.ZodObject<{
            poolAddress: z.ZodString;
            poolType: z.ZodEnum<["Classic", "Stable", "Unknown"]>;
            poolFee: z.ZodNumber;
            tokenFrom: z.ZodObject<{
                chainId: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
                decimals: z.ZodOptional<z.ZodNumber>;
                symbol: z.ZodString;
                name: z.ZodString;
                isNative: z.ZodOptional<z.ZodBoolean>;
                isToken: z.ZodOptional<z.ZodBoolean>;
                address: z.ZodOptional<z.ZodString>;
                tokenId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            }, {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            }>;
            tokenTo: z.ZodObject<{
                chainId: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
                decimals: z.ZodOptional<z.ZodNumber>;
                symbol: z.ZodString;
                name: z.ZodString;
                isNative: z.ZodOptional<z.ZodBoolean>;
                isToken: z.ZodOptional<z.ZodBoolean>;
                address: z.ZodOptional<z.ZodString>;
                tokenId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            }, {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            }>;
            assumedAmountIn: z.ZodNumber;
            assumedAmountOut: z.ZodNumber;
            swapPortion: z.ZodNumber;
            absolutePortion: z.ZodNumber;
            poolName: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            poolFee: number;
            poolAddress: string;
            poolType: "Classic" | "Stable" | "Unknown";
            tokenFrom: {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            };
            tokenTo: {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            };
            assumedAmountIn: number;
            assumedAmountOut: number;
            swapPortion: number;
            absolutePortion: number;
            poolName: string;
        }, {
            poolFee: number;
            poolAddress: string;
            poolType: "Classic" | "Stable" | "Unknown";
            tokenFrom: {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            };
            tokenTo: {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            };
            assumedAmountIn: number;
            assumedAmountOut: number;
            swapPortion: number;
            absolutePortion: number;
            poolName: string;
        }>, "many">>;
        gasSpent: z.ZodNumber;
        totalAmountOut: z.ZodNumber;
        totalAmountOutBI: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        status: string;
        fromToken: {
            symbol: string;
            name: string;
            chainId: string | number;
            decimals?: number | undefined;
            isNative?: boolean | undefined;
            isToken?: boolean | undefined;
            address?: string | undefined;
            tokenId?: string | undefined;
        };
        toToken: {
            symbol: string;
            name: string;
            chainId: string | number;
            decimals?: number | undefined;
            isNative?: boolean | undefined;
            isToken?: boolean | undefined;
            address?: string | undefined;
            tokenId?: string | undefined;
        };
        amountIn: number;
        amountInBI: bigint;
        amountOut: number;
        amountOutBI: bigint;
        gasSpent: number;
        totalAmountOut: number;
        totalAmountOutBI: bigint;
        primaryPrice?: number | undefined;
        swapPrice?: number | undefined;
        priceImpact?: number | undefined;
        legs?: {
            poolFee: number;
            poolAddress: string;
            poolType: "Classic" | "Stable" | "Unknown";
            tokenFrom: {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            };
            tokenTo: {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            };
            assumedAmountIn: number;
            assumedAmountOut: number;
            swapPortion: number;
            absolutePortion: number;
            poolName: string;
        }[] | undefined;
    }, {
        status: string;
        fromToken: {
            symbol: string;
            name: string;
            chainId: string | number;
            decimals?: number | undefined;
            isNative?: boolean | undefined;
            isToken?: boolean | undefined;
            address?: string | undefined;
            tokenId?: string | undefined;
        };
        toToken: {
            symbol: string;
            name: string;
            chainId: string | number;
            decimals?: number | undefined;
            isNative?: boolean | undefined;
            isToken?: boolean | undefined;
            address?: string | undefined;
            tokenId?: string | undefined;
        };
        amountIn: number;
        amountInBI: bigint;
        amountOut: number;
        amountOutBI: bigint;
        gasSpent: number;
        totalAmountOut: number;
        totalAmountOutBI: bigint;
        primaryPrice?: number | undefined;
        swapPrice?: number | undefined;
        priceImpact?: number | undefined;
        legs?: {
            poolFee: number;
            poolAddress: string;
            poolType: "Classic" | "Stable" | "Unknown";
            tokenFrom: {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            };
            tokenTo: {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            };
            assumedAmountIn: number;
            assumedAmountOut: number;
            swapPortion: number;
            absolutePortion: number;
            poolName: string;
        }[] | undefined;
    }>>;
    args: z.ZodOptional<z.ZodObject<{
        amountIn: z.ZodBigInt;
        amountOutMin: z.ZodBigInt;
        to: z.ZodString;
        tokenIn: z.ZodString;
        tokenOut: z.ZodString;
        routeCode: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        to: string;
        amountIn: bigint;
        amountOutMin: bigint;
        tokenIn: string;
        tokenOut: string;
        routeCode: string;
    }, {
        to: string;
        amountIn: bigint;
        amountOutMin: bigint;
        tokenIn: string;
        tokenOut: string;
        routeCode: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    route?: {
        status: string;
        fromToken: {
            symbol: string;
            name: string;
            chainId: string | number;
            decimals?: number | undefined;
            isNative?: boolean | undefined;
            isToken?: boolean | undefined;
            address?: string | undefined;
            tokenId?: string | undefined;
        };
        toToken: {
            symbol: string;
            name: string;
            chainId: string | number;
            decimals?: number | undefined;
            isNative?: boolean | undefined;
            isToken?: boolean | undefined;
            address?: string | undefined;
            tokenId?: string | undefined;
        };
        amountIn: number;
        amountInBI: bigint;
        amountOut: number;
        amountOutBI: bigint;
        gasSpent: number;
        totalAmountOut: number;
        totalAmountOutBI: bigint;
        primaryPrice?: number | undefined;
        swapPrice?: number | undefined;
        priceImpact?: number | undefined;
        legs?: {
            poolFee: number;
            poolAddress: string;
            poolType: "Classic" | "Stable" | "Unknown";
            tokenFrom: {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            };
            tokenTo: {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            };
            assumedAmountIn: number;
            assumedAmountOut: number;
            swapPortion: number;
            absolutePortion: number;
            poolName: string;
        }[] | undefined;
    } | undefined;
    args?: {
        to: string;
        amountIn: bigint;
        amountOutMin: bigint;
        tokenIn: string;
        tokenOut: string;
        routeCode: string;
    } | undefined;
}, {
    route?: {
        status: string;
        fromToken: {
            symbol: string;
            name: string;
            chainId: string | number;
            decimals?: number | undefined;
            isNative?: boolean | undefined;
            isToken?: boolean | undefined;
            address?: string | undefined;
            tokenId?: string | undefined;
        };
        toToken: {
            symbol: string;
            name: string;
            chainId: string | number;
            decimals?: number | undefined;
            isNative?: boolean | undefined;
            isToken?: boolean | undefined;
            address?: string | undefined;
            tokenId?: string | undefined;
        };
        amountIn: number;
        amountInBI: bigint;
        amountOut: number;
        amountOutBI: bigint;
        gasSpent: number;
        totalAmountOut: number;
        totalAmountOutBI: bigint;
        primaryPrice?: number | undefined;
        swapPrice?: number | undefined;
        priceImpact?: number | undefined;
        legs?: {
            poolFee: number;
            poolAddress: string;
            poolType: "Classic" | "Stable" | "Unknown";
            tokenFrom: {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            };
            tokenTo: {
                symbol: string;
                name: string;
                chainId: string | number;
                decimals?: number | undefined;
                isNative?: boolean | undefined;
                isToken?: boolean | undefined;
                address?: string | undefined;
                tokenId?: string | undefined;
            };
            assumedAmountIn: number;
            assumedAmountOut: number;
            swapPortion: number;
            absolutePortion: number;
            poolName: string;
        }[] | undefined;
    } | undefined;
    args?: {
        to: string;
        amountIn: bigint;
        amountOutMin: bigint;
        tokenIn: string;
        tokenOut: string;
        routeCode: string;
    } | undefined;
}>;
//# sourceMappingURL=validator01.d.ts.map