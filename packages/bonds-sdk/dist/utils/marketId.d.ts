import type { Address } from 'viem';
import type { BondChainId } from '..';
export declare const getMarketIdFromChainIdAuctioneerMarket: ({ chainId, auctioneerAddress, marketNumber, }: {
    chainId: BondChainId;
    auctioneerAddress: Address;
    marketNumber: bigint | number;
}) => `1:0x${string}:${number}` | `1:0x${string}:${bigint}` | `137:0x${string}:${number}` | `137:0x${string}:${bigint}` | `42161:0x${string}:${number}` | `42161:0x${string}:${bigint}` | `10:0x${string}:${number}` | `10:0x${string}:${bigint}`;
export type MarketId = ReturnType<typeof getMarketIdFromChainIdAuctioneerMarket>;
export declare const getChainIdAuctioneerMarketFromMarketId: (marketId: string) => {
    chainId: 1 | 137 | 42161 | 10;
    auctioneerAddress: `0x${string}`;
    marketNumber: bigint;
};
