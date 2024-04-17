import { ChainId } from 'sushi/chain';
import {} from 'viem';
export const FEE_DECIMALS = 100000;
export const AuctionType = {
    Static: 'Static',
    Dynamic: 'Dynamic',
};
export const AuctionTypes = [AuctionType.Static, AuctionType.Dynamic];
export const VestingType = {
    'Fixed-Term': 'Fixed-Term',
};
export const VestingTypes = [VestingType['Fixed-Term']];
export const BONDS_ENABLED_CHAIN_IDS = [
    ChainId.ETHEREUM,
    ChainId.ARBITRUM,
    ChainId.OPTIMISM,
    ChainId.POLYGON,
];
export const BONDS_SUBGRAPH_URL = {
    [ChainId.ETHEREUM]: 'api.thegraph.com/subgraphs/name/bond-protocol/bond-protocol-mainnet',
    [ChainId.ARBITRUM]: 'api.thegraph.com/subgraphs/name/bond-protocol/bond-protocol-arbitrum-mainnet',
    [ChainId.OPTIMISM]: 'api.thegraph.com/subgraphs/name/bond-protocol/bond-protocol-optimism-mainnet',
    [ChainId.POLYGON]: 'api.thegraph.com/subgraphs/name/bond-protocol/bond-protocol-polygon-mainnet',
};
export const isBondChainId = (chainId) => BONDS_ENABLED_CHAIN_IDS.includes(chainId);
export const REFERRER_ADDRESS = {
    [ChainId.ETHEREUM]: '0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7',
    [ChainId.ARBITRUM]: '0x978982772b8e4055B921bf9295c0d74eB36Bc54e',
    [ChainId.OPTIMISM]: '0x1219Bfa3A499548507b4917E33F17439b67A2177',
    [ChainId.POLYGON]: '0x850a57630A2012B2494779fBc86bBc24F2a7baeF',
};
