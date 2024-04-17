"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStargateAdapterChainId = exports.STARGATE_ADAPTER_ADDRESS = exports.STARGATE_ADAPTER_SUPPORTED_CHAIN_IDS = exports.isSushiXSwap2ChainId = exports.SUSHIXSWAP_2_ADDRESS = exports.SUSHIXSWAP_2_SUPPORTED_CHAIN_IDS = exports.isSushiXSwapChainId = exports.SUSHIXSWAP_ADDRESS = exports.SUSHIXSWAP_SUPPORTED_CHAIN_IDS = void 0;
const index_js_1 = require("../chain/index.js");
exports.SUSHIXSWAP_SUPPORTED_CHAIN_IDS = [
    index_js_1.ChainId.ARBITRUM,
    index_js_1.ChainId.AVALANCHE,
    index_js_1.ChainId.BSC,
    index_js_1.ChainId.ETHEREUM,
    index_js_1.ChainId.DEGEN,
    index_js_1.ChainId.FANTOM,
    index_js_1.ChainId.OPTIMISM,
    index_js_1.ChainId.POLYGON,
];
exports.SUSHIXSWAP_ADDRESS = {
    [index_js_1.ChainId.ARBITRUM]: '0x53b08DbD70327b7Ba3B7886Fc9987BC985d27262',
    [index_js_1.ChainId.AVALANCHE]: '0x2c8C987C4777AB740d20Cb581f5d381BE95A4A4a',
    [index_js_1.ChainId.BSC]: '0x7A4af156379f512DE147ed3b96393047226d923F',
    [index_js_1.ChainId.ETHEREUM]: '0x011E52E4E40CF9498c79273329E8827b21E2e581',
    //todo degen
    [index_js_1.ChainId.DEGEN]: '0x011E52E4E40CF9498c79273329E8827b21E2e581',
    [index_js_1.ChainId.FANTOM]: '0xD045d27c1f7e7f770a807B0a85d8e3F852e0F2BE',
    [index_js_1.ChainId.OPTIMISM]: '0x8B396ddF906D552b2F98a8E7d743DD58Cd0d920f',
    [index_js_1.ChainId.POLYGON]: '0xd08b5f3e89F1e2d6b067e0A0cbdb094e6e41E77c',
};
const isSushiXSwapChainId = (chainId) => exports.SUSHIXSWAP_SUPPORTED_CHAIN_IDS.includes(chainId);
exports.isSushiXSwapChainId = isSushiXSwapChainId;
exports.SUSHIXSWAP_2_SUPPORTED_CHAIN_IDS = [
    index_js_1.ChainId.ETHEREUM,
    index_js_1.ChainId.DEGEN,
    index_js_1.ChainId.BSC,
    index_js_1.ChainId.AVALANCHE,
    index_js_1.ChainId.POLYGON,
    index_js_1.ChainId.ARBITRUM,
    index_js_1.ChainId.OPTIMISM,
    index_js_1.ChainId.BASE,
];
exports.SUSHIXSWAP_2_ADDRESS = {
    [index_js_1.ChainId.ETHEREUM]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    //todo degen
    [index_js_1.ChainId.DEGEN]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.BSC]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.AVALANCHE]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.POLYGON]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.ARBITRUM]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.OPTIMISM]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.BASE]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
};
const isSushiXSwap2ChainId = (chainId) => exports.SUSHIXSWAP_2_SUPPORTED_CHAIN_IDS.includes(chainId);
exports.isSushiXSwap2ChainId = isSushiXSwap2ChainId;
exports.STARGATE_ADAPTER_SUPPORTED_CHAIN_IDS = [
    index_js_1.ChainId.ETHEREUM,
    index_js_1.ChainId.DEGEN,
    index_js_1.ChainId.BSC,
    index_js_1.ChainId.AVALANCHE,
    index_js_1.ChainId.POLYGON,
    index_js_1.ChainId.ARBITRUM,
    index_js_1.ChainId.OPTIMISM,
    index_js_1.ChainId.BASE,
];
exports.STARGATE_ADAPTER_ADDRESS = {
    [index_js_1.ChainId.ETHEREUM]: '0xD408a20f1213286fB3158a2bfBf5bFfAca8bF269',
    //todo degen
    [index_js_1.ChainId.DEGEN]: '0xD408a20f1213286fB3158a2bfBf5bFfAca8bF269',
    [index_js_1.ChainId.BSC]: '0xFF51a7C624Eb866917102707F3dA8bFb99Db8692',
    [index_js_1.ChainId.AVALANCHE]: '0xFF51a7C624Eb866917102707F3dA8bFb99Db8692',
    [index_js_1.ChainId.POLYGON]: '0x1719DEf1BF8422a777f2442bcE704AC4Fb20c7f0',
    [index_js_1.ChainId.ARBITRUM]: '0xFF51a7C624Eb866917102707F3dA8bFb99Db8692',
    [index_js_1.ChainId.OPTIMISM]: '0xA62eC622DbA415Aa94110739B1f951B1202Cf322',
    [index_js_1.ChainId.BASE]: '0xD408a20f1213286fB3158a2bfBf5bFfAca8bF269',
};
const isStargateAdapterChainId = (chainId) => exports.STARGATE_ADAPTER_SUPPORTED_CHAIN_IDS.includes(chainId);
exports.isStargateAdapterChainId = isStargateAdapterChainId;
//# sourceMappingURL=sushixswap.js.map