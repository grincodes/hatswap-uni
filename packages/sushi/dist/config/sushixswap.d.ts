import { ChainId } from '../chain/index.js';
export declare const SUSHIXSWAP_SUPPORTED_CHAIN_IDS: readonly [42161, 43114, 56, 1, 666666666, 250, 10, 137];
export type SushiXSwapChainId = (typeof SUSHIXSWAP_SUPPORTED_CHAIN_IDS)[number];
export declare const SUSHIXSWAP_ADDRESS: Record<SushiXSwapChainId, `0x${string}`>;
export declare const isSushiXSwapChainId: (chainId: ChainId) => chainId is 1 | 137 | 250 | 56 | 666666666 | 42161 | 43114 | 10;
export declare const SUSHIXSWAP_2_SUPPORTED_CHAIN_IDS: readonly [1, 666666666, 56, 43114, 137, 42161, 10, 8453];
export type SushiXSwap2ChainId = (typeof SUSHIXSWAP_2_SUPPORTED_CHAIN_IDS)[number];
export declare const SUSHIXSWAP_2_ADDRESS: Record<SushiXSwap2ChainId, `0x${string}`>;
export declare const isSushiXSwap2ChainId: (chainId: ChainId) => chainId is 1 | 137 | 56 | 666666666 | 42161 | 43114 | 10 | 8453;
export declare const STARGATE_ADAPTER_SUPPORTED_CHAIN_IDS: readonly [1, 666666666, 56, 43114, 137, 42161, 10, 8453];
export type StargateAdapterChainId = (typeof STARGATE_ADAPTER_SUPPORTED_CHAIN_IDS)[number];
export declare const STARGATE_ADAPTER_ADDRESS: Record<StargateAdapterChainId, `0x${string}`>;
export declare const isStargateAdapterChainId: (chainId: ChainId) => chainId is 1 | 137 | 56 | 666666666 | 42161 | 43114 | 10 | 8453;
//# sourceMappingURL=sushixswap.d.ts.map