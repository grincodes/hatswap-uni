"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainKey = exports.isChainId = exports.TESTNET_CHAIN_IDS = exports.ChainId = void 0;
exports.ChainId = {
    ETHEREUM: 1,
    // ROPSTEN: 3,
    // RINKEBY: 4,
    // GÖRLI: 5,
    // KOVAN: 42,
    POLYGON: 137,
    POLYGON_TESTNET: 80001,
    FANTOM: 250,
    FANTOM_TESTNET: 4002,
    GNOSIS: 100,
    BSC: 56,
    DEGEN: 666666666,
    BSC_TESTNET: 97,
    ARBITRUM: 42161,
    ARBITRUM_NOVA: 42170,
    ARBITRUM_TESTNET: 421614,
    AVALANCHE: 43114,
    AVALANCHE_TESTNET: 43113,
    HECO: 128,
    // HECO_TESTNET: 256,
    HARMONY: 1666600000,
    // HARMONY_TESTNET: 1666700000,
    OKEX: 66,
    // OKEX_TESTNET: 65,
    CELO: 42220,
    PALM: 11297108109,
    MOONRIVER: 1285,
    FUSE: 122,
    TELOS: 40,
    MOONBEAM: 1284,
    OPTIMISM: 10,
    KAVA: 2222,
    METIS: 1088,
    BOBA: 288,
    BOBA_AVAX: 43288,
    BOBA_BNB: 56288,
    BTTC: 199,
    SEPOLIA: 11155111,
    // CONSENSUS_ZKEVM_TESTNET: 59140,
    // SCROLL_ALPHA_TESTNET: 534353,
    // BASE_TESTNET: 84531,
    POLYGON_ZKEVM: 1101,
    THUNDERCORE: 108,
    FILECOIN: 314,
    HAQQ: 11235,
    CORE: 1116,
    ZKSYNC_ERA: 324,
    LINEA: 59144,
    BASE: 8453,
    SCROLL: 534352,
    ZETACHAIN: 7000,
    CRONOS: 25,
    BLAST: 81457,
    // RONIN: 2020,
};
exports.TESTNET_CHAIN_IDS = [
    exports.ChainId.ARBITRUM_TESTNET,
    exports.ChainId.AVALANCHE_TESTNET,
    exports.ChainId.BSC_TESTNET,
    exports.ChainId.FANTOM_TESTNET,
    // ChainId.HECO_TESTNET,
    // ChainId.HARMONY_TESTNET,
    // ChainId.OKEX_TESTNET,
    exports.ChainId.POLYGON_TESTNET,
    exports.ChainId.SEPOLIA,
    // ChainId.ROPSTEN,
    // ChainId.RINKEBY,
    // ChainId.GÖRLI,
    // ChainId.KOVAN,
];
const isChainId = (chainId) => Object.values(exports.ChainId).includes(chainId);
exports.isChainId = isChainId;
exports.ChainKey = {
    [exports.ChainId.ARBITRUM]: 'arbitrum',
    [exports.ChainId.ARBITRUM_NOVA]: 'arbitrum-nova',
    [exports.ChainId.ARBITRUM_TESTNET]: 'arbitrum-testnet',
    [exports.ChainId.AVALANCHE]: 'avalanche',
    [exports.ChainId.AVALANCHE_TESTNET]: 'avalance-testnet',
    [exports.ChainId.BSC]: 'bsc',
    [exports.ChainId.DEGEN]: 'degen',
    [exports.ChainId.BSC_TESTNET]: 'bsc-testnet',
    [exports.ChainId.CELO]: 'celo',
    [exports.ChainId.ETHEREUM]: 'ethereum',
    [exports.ChainId.FANTOM]: 'fantom',
    [exports.ChainId.FANTOM_TESTNET]: 'fantom-testnet',
    [exports.ChainId.FUSE]: 'fuse',
    // [ChainId.GÖRLI]: 'goerli',
    [exports.ChainId.HARMONY]: 'harmony',
    // [ChainId.HARMONY_TESTNET]: 'harmony-testnet',
    [exports.ChainId.HECO]: 'heco',
    // [ChainId.HECO_TESTNET]: 'heco-testnet',
    // [ChainId.KOVAN]: 'kovan',
    // [ChainId.ROPSTEN]: 'ropsten',
    [exports.ChainId.POLYGON]: 'polygon',
    [exports.ChainId.POLYGON_TESTNET]: 'matic-testnet',
    [exports.ChainId.MOONBEAM]: 'moonbeam',
    // [ChainId.MOONBEAM_TESTNET]: 'moonbeam-testnet',
    [exports.ChainId.MOONRIVER]: 'moonriver',
    [exports.ChainId.OKEX]: 'okex',
    // [ChainId.OKEX_TESTNET]: 'okex-testnet',
    [exports.ChainId.PALM]: 'palm',
    // [ChainId.PALM_TESTNET]: 'palm-testnet',
    // [ChainId.RINKEBY]: 'rinkeby',
    [exports.ChainId.TELOS]: 'telos',
    [exports.ChainId.GNOSIS]: 'gnosis',
    [exports.ChainId.OPTIMISM]: 'optimism',
    [exports.ChainId.KAVA]: 'kava',
    [exports.ChainId.METIS]: 'metis',
    [exports.ChainId.BOBA]: 'boba',
    [exports.ChainId.BOBA_AVAX]: 'boba-avax',
    [exports.ChainId.BOBA_BNB]: 'boba-bnb',
    [exports.ChainId.BTTC]: 'bttc',
    // [ChainId.CONSENSUS_ZKEVM_TESTNET]: 'consensus-zkevm-testnet',
    // [ChainId.SCROLL_ALPHA_TESTNET]: 'scroll-alpha-testnet',
    // [ChainId.BASE_TESTNET]:'base-testnet',
    [exports.ChainId.POLYGON_ZKEVM]: 'polygon-zkevm',
    [exports.ChainId.THUNDERCORE]: 'thundercore',
    [exports.ChainId.HAQQ]: 'haqq',
    [exports.ChainId.CORE]: 'core',
    [exports.ChainId.ZKSYNC_ERA]: 'zksync-era',
    [exports.ChainId.LINEA]: 'linea',
    [exports.ChainId.BASE]: 'base',
    [exports.ChainId.FILECOIN]: 'filecoin',
    [exports.ChainId.SEPOLIA]: 'sepolia',
    [exports.ChainId.SCROLL]: 'scroll',
    [exports.ChainId.ZETACHAIN]: 'zetachain',
    [exports.ChainId.CRONOS]: 'cronos',
    [exports.ChainId.BLAST]: 'blast',
};
//# sourceMappingURL=constants.js.map