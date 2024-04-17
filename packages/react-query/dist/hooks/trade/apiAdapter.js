import { Native, Token } from 'sushi/currency';
import { PoolType } from 'sushi/tines';
import z from 'zod';
function getApi1Token(token) {
    if (token instanceof Token)
        return {
            chainId: token.chainId,
            decimals: token.decimals,
            symbol: token.symbol,
            name: token.name,
            isNative: token.isNative,
            isToken: token.isToken,
            address: token.address,
            tokenId: token.id,
        };
    else
        return {
            chainId: token.chainId,
            decimals: token.decimals,
            symbol: token.symbol,
            name: token.name,
            isNative: token.isNative,
            isToken: token.isToken,
            tokenId: token.id,
        };
}
function getApi1TokenFromToken2(token, chainId) {
    const isNative = token.address.toLowerCase() === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
    return {
        chainId,
        decimals: token.decimals,
        symbol: token.symbol,
        name: token.name,
        isNative,
        isToken: !isNative,
        address: token.address,
        tokenId: `${token.address}_${chainId}`,
    };
}
function getApi1TokenAddr(token) {
    return token instanceof Token
        ? token.address
        : '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
}
function getApi1PoolType(pt) {
    if (pt === PoolType.Classic || pt === PoolType.Stable)
        return pt;
    return 'Unknown';
}
function getApi1Leg(leg, tokens, chainId) {
    return {
        poolAddress: leg.poolAddress,
        poolType: getApi1PoolType(leg.poolType),
        poolFee: leg.poolFee,
        tokenFrom: getApi1TokenFromToken2(tokens[leg.tokenFrom], chainId),
        tokenTo: getApi1TokenFromToken2(tokens[leg.tokenTo], chainId),
        assumedAmountIn: Number(leg.assumedAmountIn),
        assumedAmountOut: Number(leg.assumedAmountOut),
        swapPortion: 0,
        absolutePortion: leg.share,
        poolName: leg.poolName,
    };
}
// converts API 2 to API 1 response
export function apiAdapter02To01(res, fromToken, toToken, to) {
    if (res.status === 'NoWay') {
        const route = {
            status: res.status,
            fromToken: getApi1Token(fromToken),
            toToken: getApi1Token(toToken),
            amountIn: 0,
            amountInBI: 0n,
            amountOut: 0,
            amountOutBI: 0n,
            legs: [],
            gasSpent: 0,
            totalAmountOut: 0,
            totalAmountOutBI: 0n,
        };
        if (to !== undefined)
            return {
                route,
                args: {
                    amountIn: 0n,
                    amountOutMin: 0n,
                    to,
                    tokenIn: getApi1TokenAddr(fromToken),
                    tokenOut: getApi1TokenAddr(toToken),
                    routeCode: '',
                },
            };
        else
            return { route };
    }
    else {
        const route = {
            status: res.status,
            fromToken: getApi1Token(fromToken),
            toToken: getApi1Token(toToken),
            primaryPrice: res.primaryPrice,
            swapPrice: res.swapPrice,
            priceImpact: res.priceImpact,
            amountIn: Number(res.amountIn),
            amountInBI: BigInt(res.amountIn),
            amountOut: Number(res.assumedAmountOut),
            amountOutBI: BigInt(res.assumedAmountOut),
            legs: res.route.map((l) => getApi1Leg(l, res.tokens, fromToken.chainId)),
            gasSpent: res.gasSpent,
            totalAmountOut: Number(res.assumedAmountOut),
            totalAmountOutBI: BigInt(res.assumedAmountOut),
        };
        if (res.routeProcessorArgs)
            return {
                route,
                args: {
                    amountIn: BigInt(res.routeProcessorArgs.amountIn),
                    amountOutMin: BigInt(res.routeProcessorArgs.amountOutMin),
                    to: res.routeProcessorArgs.to,
                    tokenIn: res.routeProcessorArgs.tokenIn,
                    tokenOut: res.routeProcessorArgs.tokenOut,
                    routeCode: res.routeProcessorArgs.routeCode,
                },
            };
        else
            return { route };
    }
}
//# sourceMappingURL=apiAdapter.js.map