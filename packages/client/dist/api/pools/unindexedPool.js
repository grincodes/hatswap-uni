var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Protocol } from '@sushiswap/database';
import { erc20Abi, tridentConstantPoolAbi, tridentStablePoolAbi, uniswapV2PairAbi, v3baseAbi, } from 'sushi/abi';
import { publicClientConfig } from 'sushi/config';
import { createPublicClient } from 'viem';
import { getChainIdAddressFromId } from 'sushi/format';
import {} from './pool';
function getTokenInfo(_a) {
    var client = _a.client, address = _a.address;
    return __awaiter(this, void 0, void 0, function () {
        var _b, name, symbol, decimals;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, client.multicall({
                        allowFailure: false,
                        contracts: [
                            {
                                address: address,
                                abi: erc20Abi,
                                functionName: 'name',
                            },
                            {
                                address: address,
                                abi: erc20Abi,
                                functionName: 'symbol',
                            },
                            {
                                address: address,
                                abi: erc20Abi,
                                functionName: 'decimals',
                            },
                            {
                                address: address,
                                abi: erc20Abi,
                                functionName: 'name',
                            },
                        ],
                    })];
                case 1:
                    _b = _c.sent(), name = _b[0], symbol = _b[1], decimals = _b[2];
                    return [2 /*return*/, { address: address, name: name, symbol: symbol, decimals: decimals }];
            }
        });
    });
}
function getV2Pool(_a) {
    var client = _a.client, address = _a.address;
    return __awaiter(this, void 0, void 0, function () {
        var _b, token0, token1, totalSupply;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, client.multicall({
                        allowFailure: false,
                        contracts: [
                            {
                                address: address,
                                abi: uniswapV2PairAbi,
                                functionName: 'token0',
                            },
                            {
                                address: address,
                                abi: uniswapV2PairAbi,
                                functionName: 'token1',
                            },
                            {
                                address: address,
                                abi: uniswapV2PairAbi,
                                functionName: 'totalSupply',
                            },
                        ],
                    })];
                case 1:
                    _b = _c.sent(), token0 = _b[0], token1 = _b[1], totalSupply = _b[2];
                    return [2 /*return*/, {
                            tokens: [token0, token1],
                            totalSupply: totalSupply.toString(),
                            swapFee: 0.003,
                            twapEnabled: true,
                            protocol: Protocol.SUSHISWAP_V2,
                        }];
            }
        });
    });
}
function getTridentStablePool(_a) {
    var client = _a.client, address = _a.address;
    return __awaiter(this, void 0, void 0, function () {
        var _b, token0, token1, totalSupply, swapFee;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, client.multicall({
                        allowFailure: false,
                        contracts: [
                            {
                                address: address,
                                abi: tridentStablePoolAbi,
                                functionName: 'token0',
                            },
                            {
                                address: address,
                                abi: tridentStablePoolAbi,
                                functionName: 'token1',
                            },
                            {
                                address: address,
                                abi: tridentStablePoolAbi,
                                functionName: 'totalSupply',
                            },
                            {
                                address: address,
                                abi: tridentStablePoolAbi,
                                functionName: 'swapFee',
                            },
                        ],
                    })];
                case 1:
                    _b = _c.sent(), token0 = _b[0], token1 = _b[1], totalSupply = _b[2], swapFee = _b[3];
                    return [2 /*return*/, {
                            tokens: [token0, token1],
                            totalSupply: totalSupply.toString(),
                            // 30 => 0.003%
                            swapFee: Number(swapFee) / 10000,
                            twapEnabled: false,
                            protocol: Protocol.BENTOBOX_STABLE,
                        }];
            }
        });
    });
}
function getTridentConstantPool(_a) {
    var client = _a.client, address = _a.address;
    return __awaiter(this, void 0, void 0, function () {
        var _b, token0, token1, totalSupply, swapFee, reserves, twapEnabled;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, client.multicall({
                        allowFailure: false,
                        contracts: [
                            {
                                address: address,
                                abi: tridentConstantPoolAbi,
                                functionName: 'token0',
                            },
                            {
                                address: address,
                                abi: tridentConstantPoolAbi,
                                functionName: 'token1',
                            },
                            {
                                address: address,
                                abi: tridentConstantPoolAbi,
                                functionName: 'totalSupply',
                            },
                            {
                                address: address,
                                abi: tridentConstantPoolAbi,
                                functionName: 'swapFee',
                            },
                            {
                                address: address,
                                abi: tridentConstantPoolAbi,
                                functionName: 'getReserves',
                            },
                        ],
                    })];
                case 1:
                    _b = _c.sent(), token0 = _b[0], token1 = _b[1], totalSupply = _b[2], swapFee = _b[3], reserves = _b[4];
                    twapEnabled = reserves[2] > 0;
                    return [2 /*return*/, {
                            tokens: [token0, token1],
                            totalSupply: totalSupply.toString(),
                            // 30 => 0.003%
                            swapFee: Number(swapFee) / 10000,
                            twapEnabled: twapEnabled,
                            protocol: Protocol.BENTOBOX_CLASSIC,
                        }];
            }
        });
    });
}
function getV3Pool(_a) {
    var client = _a.client, address = _a.address;
    return __awaiter(this, void 0, void 0, function () {
        var _b, token0, token1, liquidity, fee;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, client.multicall({
                        allowFailure: false,
                        contracts: [
                            {
                                address: address,
                                abi: v3baseAbi,
                                functionName: 'token0',
                            },
                            {
                                address: address,
                                abi: v3baseAbi,
                                functionName: 'token1',
                            },
                            {
                                address: address,
                                abi: v3baseAbi,
                                functionName: 'liquidity',
                            },
                            {
                                address: address,
                                abi: v3baseAbi,
                                functionName: 'fee',
                            },
                        ],
                    })];
                case 1:
                    _b = _c.sent(), token0 = _b[0], token1 = _b[1], liquidity = _b[2], fee = _b[3];
                    return [2 /*return*/, {
                            tokens: [token0, token1],
                            totalSupply: liquidity.toString(),
                            // 500 is 0.05%. divide it by 1M to get the 0.0005 format
                            swapFee: fee / 1000000,
                            twapEnabled: true,
                            protocol: Protocol.SUSHISWAP_V3,
                        }];
            }
        });
    });
}
// Thought ReturnType would be enough, needed to wrap it to make TS happy
export function getUnindexedPool(poolId) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, chainId, address, cfg, client, lpTokenName, name_1, _e_1, poolFetcher, pool, tokens, poolName, _b, token0, token1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = getChainIdAddressFromId(poolId), chainId = _a.chainId, address = _a.address;
                    if (chainId in publicClientConfig === false)
                        throw new Error('Invalid chain id.');
                    cfg = publicClientConfig[chainId];
                    client = createPublicClient({
                        chain: cfg.chain,
                        transport: cfg.transport,
                    });
                    return [4 /*yield*/, client.getBytecode({ address: address })];
                case 1:
                    if (!(_c.sent())) {
                        throw new Error('Invalid pool address.');
                    }
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, getTokenInfo({ client: client, address: address })];
                case 3:
                    name_1 = (_c.sent()).name;
                    lpTokenName = name_1;
                    return [3 /*break*/, 5];
                case 4:
                    _e_1 = _c.sent();
                    lpTokenName = 'V3';
                    return [3 /*break*/, 5];
                case 5:
                    switch (lpTokenName) {
                        case 'Sushi Stable LP Token':
                            poolFetcher = getTridentStablePool;
                            break;
                        case 'Sushi Constant Product LP Token':
                            poolFetcher = getTridentConstantPool;
                            break;
                        case 'SushiSwap LP Token':
                            poolFetcher = getV2Pool;
                            break;
                        default:
                            poolFetcher = getV3Pool;
                    }
                    return [4 /*yield*/, poolFetcher({ client: client, address: address })];
                case 6:
                    pool = _c.sent();
                    return [4 /*yield*/, Promise.all(pool.tokens.map(function (token) { return getTokenInfo({ client: client, address: token }); }))];
                case 7:
                    tokens = _c.sent();
                    poolName = tokens.map(function (_a) {
                        var symbol = _a.symbol;
                        return symbol;
                    }).join('-');
                    _b = tokens, token0 = _b[0], token1 = _b[1];
                    return [2 /*return*/, __assign({ id: poolId, address: address, name: poolName, chainId: Number(chainId), token0: {
                                id: "".concat(chainId, ":").concat(token0.address.toLowerCase()),
                                address: token0.address.toLowerCase(),
                                symbol: token0.symbol,
                                name: token0.name,
                                decimals: token0.decimals,
                            }, token1: {
                                id: "".concat(chainId, ":").concat(token1.address.toLowerCase()),
                                address: token1.address.toLowerCase(),
                                symbol: token1.symbol,
                                name: token1.name,
                                decimals: token1.decimals,
                            }, hasEnabledSteerVault: false, hadEnabledSteerVault: false, steerVaults: [], liquidityUSD: '0', volumeUSD: '0', feesUSD: '0', liquidityUSDChange1h: 0, liquidityUSDChange1d: 0, liquidityUSDChange1w: 0, liquidityUSDChange1m: 0, feeApr1h: 0, feeApr1d: 0, feeApr1w: 0, feeApr1m: 0, totalApr1h: 0, totalApr1d: 0, totalApr1w: 0, totalApr1m: 0, incentiveApr: 0, isIncentivized: false, wasIncentivized: false, volume1h: '0', volume1d: '0', volume1w: '0', volume1m: '0', volumeChange1h: 0, volumeChange1d: 0, volumeChange1w: 0, volumeChange1m: 0, fees1h: '0', fees1d: '0', fees1w: '0', fees1m: '0', feesChange1h: 0, feesChange1d: 0, feesChange1w: 0, feesChange1m: 0, isBlacklisted: false, incentives: [] }, pool)];
            }
        });
    });
}
//# sourceMappingURL=unindexedPool.js.map