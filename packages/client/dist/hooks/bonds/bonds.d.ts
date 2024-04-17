import { type GetBondsArgs } from '../../pure/bonds/bonds/bonds';
import { type SWRHookConfig } from '../../types';
export declare const useBonds: ({ args, shouldFetch, }: SWRHookConfig<GetBondsArgs>) => import("swr/_internal").SWRResponse<{
    id: `1:0x${string}:${number}` | `1:0x${string}:${bigint}` | `137:0x${string}:${number}` | `137:0x${string}:${bigint}` | `42161:0x${string}:${number}` | `42161:0x${string}:${bigint}` | `10:0x${string}:${number}` | `10:0x${string}:${bigint}`;
    chainId: 1 | 42161 | 10 | 137;
    description: string | undefined;
    marketId: number;
    auctionType: "Static" | "Dynamic";
    tellerAddress: `0x${string}`;
    auctioneerAddress: `0x${string}`;
    isClosed: boolean;
    start: number;
    end: number;
    marketScale: string;
    discount: number;
    price: string | null;
    minPrice: string | null;
    capacity: number;
    capacityInQuote: boolean;
    vesting: number;
    vestingType: "Fixed-Term";
    issuerAddress: `0x${string}`;
    issuer: {
        ids: string[];
        name: string;
        link: string;
    } | undefined;
    quoteToken: {
        priceUSD: number;
        pool: {
            poolId: string;
            token0: {
                address: `0x${string}`;
                chainId: number;
                symbol: string;
                id: string;
                name: string;
                decimals: number;
            };
            token1: {
                address: `0x${string}`;
                chainId: number;
                symbol: string;
                id: string;
                name: string;
                decimals: number;
            };
            liquidity: number;
            liquidityUSD: number;
            protocol: import("@prisma/client").$Enums.Protocol;
        };
        id: string;
        decimals: number;
        chainId: number;
        vault: undefined;
        symbol: string;
        address: `0x${string}`;
        name: string;
    } | {
        name: string;
        symbol: string;
        priceUSD: number;
        vault: {
            id: string;
            poolId: string;
            token0: {
                address: `0x${string}`;
                chainId: number;
                priceUSD: number;
                symbol: string;
                id: string;
                name: string;
                decimals: number;
            };
            token1: {
                address: `0x${string}`;
                chainId: number;
                priceUSD: number;
                symbol: string;
                id: string;
                name: string;
                decimals: number;
            };
        };
        id: string;
        decimals: number;
        chainId: number;
        pool: undefined;
        address: `0x${string}`;
    } | {
        priceUSD: number | undefined;
        id: string;
        decimals: number;
        chainId: number;
        pool: undefined;
        vault: undefined;
        symbol: string;
        address: `0x${string}`;
        name: string;
    };
    payoutToken: {
        id: string;
        decimals: number;
        chainId: 1 | 42161 | 10 | 137;
        priceUSD: number;
        discountedPriceUSD: number;
        symbol: string;
        address: `0x${string}`;
        name: string;
    };
    quoteTokensPerPayoutToken: number;
    totalBondedAmount: number;
    totalPayoutAmount: number;
}[], any, any>;
//# sourceMappingURL=bonds.d.ts.map