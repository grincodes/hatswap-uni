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
import { BONDS_SUBGRAPH_URL, getBondDiscount, getMarketIdFromChainIdAuctioneerMarket, getMarketsPrices, } from '@sushiswap/bonds-sdk';
import { createClient } from '@sushiswap/database';
import { getBuiltGraphSDK, } from '@sushiswap/graph-client';
import { getTotalSupply, getVaultReserves } from '@sushiswap/steer-sdk';
import { getChainIdAddressFromId, getIdFromChainIdAddress, isPromiseFulfilled, } from 'sushi';
import { publicClientConfig } from 'sushi/config';
import { createPublicClient, getAddress } from 'viem';
import {} from '../../../pure/bonds/bonds/schema';
import { getPools } from '../../../pure/pools/pools/pools';
import { getSteerVaults, } from '../../../pure/steer-vault/vaults/vaults';
import { convertAuctionTypes } from '../common';
import { getTokenPricesChainV2 } from '../price';
import { BondSchema } from '../schema';
var isOpen = function (start, end) {
    return (!start || Date.now() / 1000 > start) && end && Date.now() / 1000 < end;
};
function getQuoteToken(_a) {
    var bond = _a.bond, prices = _a.prices, pools = _a.pools, vaults = _a.vaults;
    return __awaiter(this, void 0, void 0, function () {
        var quotePool, base, priceUSD_1, quoteVault, client, vaultId, _b, _c, reserve0, reserve1, totalSupply, token0PriceUSD, token1PriceUSD, reserve0USD, reserve1USD, reserveUSD, priceUSD_2, priceUSD;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    quotePool = pools.find(function (p) { return p.address === bond.quoteToken.address.toLowerCase(); });
                    base = __assign(__assign({}, bond.quoteToken), { id: getIdFromChainIdAddress(bond.chainId, bond.quoteToken.address), decimals: Number(bond.quoteToken.decimals), chainId: bond.chainId, pool: undefined, vault: undefined });
                    if (quotePool) {
                        priceUSD_1 = Number(quotePool.liquidityUSD) /
                            (Number(quotePool.totalSupply) / Math.pow(10, Number(bond.quoteToken.decimals)));
                        return [2 /*return*/, __assign(__assign({}, base), { priceUSD: priceUSD_1, pool: {
                                    poolId: quotePool.id,
                                    token0: __assign(__assign({}, quotePool.token0), { address: quotePool.token0.address, chainId: bond.chainId }),
                                    token1: __assign(__assign({}, quotePool.token1), { address: quotePool.token1.address, chainId: bond.chainId }),
                                    liquidity: Number(quotePool.totalSupply),
                                    liquidityUSD: Number(quotePool.liquidityUSD),
                                    protocol: quotePool.protocol,
                                } })];
                    }
                    quoteVault = vaults.find(function (v) { return v.address === bond.quoteToken.address.toLowerCase(); });
                    if (!quoteVault) return [3 /*break*/, 2];
                    client = createPublicClient(publicClientConfig[bond.chainId]);
                    vaultId = getIdFromChainIdAddress(bond.chainId, quoteVault.address);
                    return [4 /*yield*/, Promise.all([
                            getVaultReserves({ client: client, vaultId: vaultId }),
                            getTotalSupply({ client: client, vaultId: vaultId }),
                        ])];
                case 1:
                    _b = _d.sent(), _c = _b[0], reserve0 = _c.reserve0, reserve1 = _c.reserve1, totalSupply = _b[1];
                    token0PriceUSD = prices[getAddress(quoteVault.token0.address)];
                    token1PriceUSD = prices[getAddress(quoteVault.token1.address)];
                    if (!token0PriceUSD || !token1PriceUSD)
                        throw new Error("Missing token prices for vaultId: ".concat(vaultId, " (").concat(quoteVault.token0.address, ", ").concat(quoteVault.token1.address, ")"));
                    reserve0USD = (Number(reserve0) / Math.pow(10, quoteVault.token0.decimals)) * token0PriceUSD;
                    reserve1USD = (Number(reserve1) / Math.pow(10, quoteVault.token1.decimals)) * token1PriceUSD;
                    reserveUSD = reserve0USD + reserve1USD;
                    priceUSD_2 = reserveUSD / (Number(totalSupply) / Math.pow(10, base.decimals));
                    return [2 /*return*/, __assign(__assign({}, base), { name: 'Smart Pool LP', symbol: "".concat(quoteVault.token0.symbol, "/").concat(quoteVault.token1.symbol), priceUSD: priceUSD_2, vault: {
                                id: vaultId,
                                poolId: quoteVault.pool.id,
                                token0: __assign(__assign({}, quoteVault.token0), { address: quoteVault.token0.address, chainId: bond.chainId, priceUSD: token0PriceUSD }),
                                token1: __assign(__assign({}, quoteVault.token1), { address: quoteVault.token1.address, chainId: bond.chainId, priceUSD: token1PriceUSD }),
                            } })];
                case 2:
                    priceUSD = prices[getAddress(bond.quoteToken.address)];
                    return [2 /*return*/, __assign(__assign({}, base), { priceUSD: priceUSD })];
            }
        });
    });
}
export function getBondsFromSubgraph(args) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var auctioneers, marketIdFilter, auctionTypes, query, client, issuersP, bondDescriptionsP, bonds;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    auctioneers = ((_a = args.ids) === null || _a === void 0 ? void 0 : _a.map(function (_a) {
                        var auctioneerAddress = _a.auctioneerAddress;
                        return auctioneerAddress;
                    })) || null;
                    marketIdFilter = ((_b = args.ids) === null || _b === void 0 ? void 0 : _b.map(function (_a) {
                        var marketNumber = _a.marketNumber;
                        return Number(marketNumber);
                    })) || null;
                    auctionTypes = convertAuctionTypes(args.auctionTypes);
                    query = {
                        first: args.take,
                        where: {
                            auctioneer_in: auctioneers,
                            marketId_in: marketIdFilter,
                            hasClosed: args.onlyOpen ? false : null,
                            type_in: auctionTypes,
                        },
                    };
                    Object.entries(query.where).map(function (_a) {
                        var key = _a[0], value = _a[1];
                        if (value === null)
                            delete query.where[key];
                    });
                    return [4 /*yield*/, createClient()];
                case 1:
                    client = _c.sent();
                    issuersP = client.bondIssuer
                        .findMany({
                        select: {
                            name: true,
                            link: true,
                            ids: {
                                select: {
                                    id: true,
                                },
                            },
                        },
                        where: {
                            isApproved: true,
                        },
                        cacheStrategy: {
                            swr: 900,
                            ttl: 300,
                        },
                    })
                        .then(function (d) {
                        return d.map(function (issuer) { return (__assign(__assign({}, issuer), { ids: issuer.ids.map(function (_a) {
                                var id = _a.id;
                                return id;
                            }) })); });
                    });
                    bondDescriptionsP = client.bondMarket.findMany({
                        select: {
                            id: true,
                            description: true,
                        },
                        cacheStrategy: {
                            swr: 900,
                            ttl: 300,
                        },
                    });
                    return [4 /*yield*/, Promise.allSettled(args.chainIds.map(function (chainId) { return __awaiter(_this, void 0, void 0, function () {
                            var sdk, _a, bonds, prices, issuers, bondDescriptions, bondsParsed, bondsFiltered, marketIds, _b, poolsP, vaultsP, _c, marketPricesS, 
                            /*referrerFeesS, protocolFeesS, */ poolsS, vaultsS, marketPrices, pools, vaults, processed, processedAwaited;
                            var _this = this;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        sdk = getBuiltGraphSDK({ url: BONDS_SUBGRAPH_URL[chainId] });
                                        return [4 /*yield*/, Promise.all([
                                                sdk.BondMarkets(query),
                                                getTokenPricesChainV2({ chainId: chainId }),
                                                issuersP,
                                                bondDescriptionsP,
                                            ])
                                            // Validate and parse the bonds
                                        ];
                                    case 1:
                                        _a = _d.sent(), bonds = _a[0].bonds, prices = _a[1], issuers = _a[2], bondDescriptions = _a[3];
                                        bondsParsed = bonds
                                            .map(function (bond) { return BondSchema.safeParse(bond); })
                                            .flatMap(function (bond) {
                                            if (!bond.success) {
                                                console.error(bond.error);
                                                return [];
                                            }
                                            return bond.data;
                                        });
                                        bondsFiltered = bondsParsed.filter(function (bond) {
                                            if (!args.anyIssuer &&
                                                !issuers.some(function (issuer) {
                                                    return issuer.ids.some(function (id) {
                                                        var _a = getChainIdAddressFromId(id), chainId = _a.chainId, address = _a.address;
                                                        return (chainId === bond.chainId &&
                                                            address.toLowerCase() === bond.owner.toLowerCase());
                                                    });
                                                })) {
                                                return false;
                                            }
                                            if (auctioneers && !(auctioneers === null || auctioneers === void 0 ? void 0 : auctioneers.includes(bond.auctioneer))) {
                                                return false;
                                            }
                                            if (marketIdFilter &&
                                                !(marketIdFilter === null || marketIdFilter === void 0 ? void 0 : marketIdFilter.includes(Number(bond.marketId)))) {
                                                return false;
                                            }
                                            if (args.onlyOpen && !isOpen(bond.start, bond.conclusion)) {
                                                return false;
                                            }
                                            return true;
                                        });
                                        marketIds = bondsFiltered.map(function (bond) {
                                            return getMarketIdFromChainIdAuctioneerMarket({
                                                chainId: chainId,
                                                auctioneerAddress: bond.auctioneer,
                                                marketNumber: bond.marketId,
                                            });
                                        });
                                        _b = (function () {
                                            var quoteTokenIds = bondsFiltered.map(function (bond) {
                                                return getIdFromChainIdAddress(chainId, bond.quoteToken.address);
                                            });
                                            // No need to fetch if there are no bonds
                                            if (quoteTokenIds.length === 0)
                                                return [[], []];
                                            return [
                                                getPools({
                                                    chainIds: [chainId],
                                                    ids: quoteTokenIds,
                                                }),
                                                getSteerVaults({
                                                    chainIds: [chainId],
                                                    ids: quoteTokenIds,
                                                }),
                                            ];
                                        })(), poolsP = _b[0], vaultsP = _b[1];
                                        return [4 /*yield*/, Promise.allSettled([
                                                getMarketsPrices({
                                                    client: createPublicClient(publicClientConfig[chainId]),
                                                    marketIds: marketIds,
                                                }),
                                                // getReferrerFees({
                                                //   client: createPublicClient(config[chainId]),
                                                //   args: tellerIds.map((tellerId) => ({
                                                //     referrerId: getIdFromChainIdAddress(
                                                //       chainId,
                                                //       REFERRER_ADDRESS[chainId],
                                                //     ),
                                                //     tellerId,
                                                //   })),
                                                // }),
                                                // getProtocolFees({
                                                //   client: createPublicClient(config[chainId]),
                                                //   tellerIds,
                                                // }),
                                                poolsP,
                                                vaultsP,
                                            ])];
                                    case 2:
                                        _c = _d.sent(), marketPricesS = _c[0], poolsS = _c[1], vaultsS = _c[2];
                                        if (!isPromiseFulfilled(marketPricesS))
                                            throw new Error("Failed to fetch marketPrices on ".concat(chainId));
                                        marketPrices = marketPricesS.value;
                                        pools = isPromiseFulfilled(poolsS) ? poolsS.value : [];
                                        vaults = isPromiseFulfilled(vaultsS) ? vaultsS.value : [];
                                        processed = Promise.allSettled(bondsFiltered.flatMap(function (bond, i) { return __awaiter(_this, void 0, void 0, function () {
                                            var quoteToken, payoutTokenPriceUSD, marketId, marketPrice, description, issuer, _a, discount, discountedPrice, quoteTokensPerPayoutToken;
                                            var _b, _c;
                                            return __generator(this, function (_d) {
                                                switch (_d.label) {
                                                    case 0: return [4 /*yield*/, getQuoteToken({
                                                            bond: bond,
                                                            prices: prices,
                                                            pools: pools,
                                                            vaults: vaults,
                                                        })];
                                                    case 1:
                                                        quoteToken = _d.sent();
                                                        payoutTokenPriceUSD = prices[getAddress(bond.payoutToken.address)];
                                                        marketId = marketIds[i];
                                                        marketPrice = (_b = marketPrices.find(function (el) { return el.marketId === marketId; })) === null || _b === void 0 ? void 0 : _b.marketPrice;
                                                        description = ((_c = bondDescriptions.find(function (el) { return el.id === marketId; })) === null || _c === void 0 ? void 0 : _c.description) ||
                                                            undefined;
                                                        issuer = issuers.find(function (issuer) {
                                                            return issuer.ids.some(function (id) {
                                                                var _a = getChainIdAddressFromId(id), chainId = _a.chainId, address = _a.address;
                                                                return (chainId === bond.chainId &&
                                                                    address.toLowerCase() === bond.owner.toLowerCase());
                                                            });
                                                        });
                                                        if (!quoteToken.priceUSD ||
                                                            !payoutTokenPriceUSD ||
                                                            !marketPrice ||
                                                            !bond.scale /*||
                                                        !referrerFee ||
                                                        !protocolFee*/)
                                                            return [2 /*return*/, []
                                                                // const totalFee =
                                                                //   (referrerFee.referrerFee + protocolFee.protocolFee) / FEE_DECIMALS
                                                            ];
                                                        _a = getBondDiscount({
                                                            marketScale: bond.scale,
                                                            marketPrice: marketPrice,
                                                            payoutToken: {
                                                                priceUSD: payoutTokenPriceUSD,
                                                                decimals: Number(bond.payoutToken.decimals),
                                                            },
                                                            quoteToken: {
                                                                priceUSD: quoteToken.priceUSD,
                                                                decimals: Number(bond.quoteToken.decimals),
                                                            },
                                                        }), discount = _a.discount, discountedPrice = _a.discountedPrice, quoteTokensPerPayoutToken = _a.quoteTokensPerPayoutToken;
                                                        return [2 /*return*/, {
                                                                id: marketId,
                                                                chainId: chainId,
                                                                description: description,
                                                                marketId: Number(bond.marketId),
                                                                auctionType: bond.type,
                                                                tellerAddress: bond.teller,
                                                                auctioneerAddress: bond.auctioneer,
                                                                isClosed: bond.hasClosed || !isOpen(bond.start, bond.conclusion),
                                                                start: Number(bond.start),
                                                                end: Number(bond.conclusion),
                                                                marketScale: String(bond.scale),
                                                                discount: discount,
                                                                price: marketPrice ? String(marketPrice) : null,
                                                                minPrice: bond.minPrice ? String(bond.minPrice) : null,
                                                                // totalFee,
                                                                capacity: Number(bond.capacity) / Math.pow(10, Number(bond.payoutToken.decimals)),
                                                                capacityInQuote: bond.capacityInQuote,
                                                                vesting: Number(bond.vesting),
                                                                vestingType: bond.vestingType,
                                                                issuerAddress: bond.owner,
                                                                issuer: issuer,
                                                                quoteToken: quoteToken,
                                                                payoutToken: __assign(__assign({}, bond.payoutToken), { id: getIdFromChainIdAddress(chainId, bond.payoutToken.address), decimals: Number(bond.payoutToken.decimals), chainId: chainId, priceUSD: payoutTokenPriceUSD, discountedPriceUSD: discountedPrice }),
                                                                quoteTokensPerPayoutToken: quoteTokensPerPayoutToken,
                                                                totalBondedAmount: bond.totalBondedAmount,
                                                                totalPayoutAmount: bond.totalPayoutAmount,
                                                            }];
                                                }
                                            });
                                        }); }));
                                        return [4 /*yield*/, processed];
                                    case 3:
                                        processedAwaited = (_d.sent()).flatMap(function (bond) {
                                            if (isPromiseFulfilled(bond))
                                                return bond.value;
                                            console.error(bond.reason);
                                            return [];
                                        });
                                        return [2 /*return*/, processedAwaited.filter(function (bond) {
                                                if (typeof args.onlyDiscounted !== 'undefined') {
                                                    return args.onlyDiscounted ? bond.discount > 0 : true;
                                                }
                                                return true;
                                            })];
                                }
                            });
                        }); }))];
                case 2:
                    bonds = _c.sent();
                    return [4 /*yield*/, client.$disconnect()];
                case 3:
                    _c.sent();
                    return [2 /*return*/, bonds.flatMap(function (bond) {
                            if (isPromiseFulfilled(bond))
                                return bond.value;
                            console.error(bond.reason);
                            return [];
                        })];
            }
        });
    });
}
//# sourceMappingURL=index.js.map