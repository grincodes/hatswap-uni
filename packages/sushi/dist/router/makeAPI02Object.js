"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAPI02Object = void 0;
const index_js_1 = require("../tines/index.js");
function makeAPI02Token(token) {
    return {
        address: token.address || '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
        symbol: token.symbol,
        name: token.name,
        decimals: token.decimals,
    };
}
function makeAPI02Leg(leg, tokens) {
    return {
        poolAddress: leg.poolAddress,
        poolType: leg.poolType,
        // @ts-ignore
        poolName: leg.poolName,
        poolFee: leg.poolFee,
        tokenFrom: tokens.getTokenIndex(leg.tokenFrom),
        tokenTo: tokens.getTokenIndex(leg.tokenTo),
        share: leg.absolutePortion,
        assumedAmountIn: BigInt(leg.assumedAmountIn).toString(),
        assumedAmountOut: BigInt(leg.assumedAmountOut).toString(),
    };
}
class TokenConvertor {
    tokens = [];
    tokenMap = new Map();
    _tokenId(t) {
        return t.tokenId ?? t.symbol;
    }
    addToken(t) {
        if (this.tokenMap.get(this._tokenId(t)) === undefined) {
            this.tokens.push(makeAPI02Token(t));
            this.tokenMap.set(this._tokenId(t), this.tokens.length - 1);
        }
    }
    getTokenIndex(t) {
        return this.tokenMap.get(this._tokenId(t));
    }
    getTokenList() {
        return this.tokens;
    }
}
function makeAPI02Object(route, rpParams, routeProcessorAddr) {
    if (route.status === index_js_1.RouteStatus.NoWay)
        return { status: index_js_1.RouteStatus.NoWay };
    const tokens = new TokenConvertor();
    route.legs.forEach((l) => {
        tokens.addToken(l.tokenFrom);
        tokens.addToken(l.tokenTo);
    });
    const APIObj = {
        status: route.status,
        tokens: tokens.getTokenList(),
        tokenFrom: tokens.getTokenIndex(route.fromToken),
        tokenTo: tokens.getTokenIndex(route.toToken),
        primaryPrice: route.primaryPrice,
        swapPrice: route.swapPrice,
        priceImpact: route.priceImpact,
        amountIn: route.amountInBI.toString(),
        assumedAmountOut: route.amountOutBI.toString(),
        gasSpent: route.gasSpent,
        route: route.legs.map((l) => makeAPI02Leg(l, tokens)),
    };
    if (rpParams !== undefined) {
        APIObj.routeProcessorAddr = routeProcessorAddr;
        APIObj.routeProcessorArgs = {
            tokenIn: rpParams.tokenIn,
            amountIn: rpParams.amountIn.toString(),
            tokenOut: rpParams.tokenOut,
            amountOutMin: rpParams.amountOutMin.toString(),
            to: rpParams.to,
            routeCode: rpParams.routeCode,
        };
        if (rpParams.value !== undefined)
            APIObj.routeProcessorArgs.value = rpParams.value.toString();
    }
    return APIObj;
}
exports.makeAPI02Object = makeAPI02Object;
//# sourceMappingURL=makeAPI02Object.js.map