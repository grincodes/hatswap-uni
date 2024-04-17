import { ChainId } from 'sushi/chain';
import { type Address } from 'viem';
export declare const FEE_DECIMALS = 100000;
export declare const AuctionType: {
    readonly Static: "Static";
    readonly Dynamic: "Dynamic";
};
export declare const AuctionTypes: readonly ["Static", "Dynamic"];
export type AuctionType = (typeof AuctionType)[keyof typeof AuctionType];
export declare const VestingType: {
    readonly 'Fixed-Term': "Fixed-Term";
};
export declare const VestingTypes: readonly ["Fixed-Term"];
export type VestingType = (typeof VestingType)[keyof typeof VestingType];
export declare const BONDS_ENABLED_CHAIN_IDS: readonly [1, 42161, 10, 137];
export type BondChainId = (typeof BONDS_ENABLED_CHAIN_IDS)[number];
export declare const BONDS_SUBGRAPH_URL: Record<BondChainId, string>;
export declare const isBondChainId: (chainId: ChainId) => chainId is 1 | 137 | 42161 | 10;
export declare const REFERRER_ADDRESS: Record<BondChainId, Address>;
