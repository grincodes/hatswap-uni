import {} from '@sushiswap/database';
import { deepmergeInto } from 'deepmerge-ts';
import {} from '../../pure/pools/count/schema';
import {} from '../../pure/pools/pools/schema';
export function parsePoolArgs(args) {
    var where = {};
    var addFilter = function (filter) { return deepmergeInto(where, filter); };
    if ('ids' in args && args.ids !== undefined) {
        addFilter({
            id: {
                in: args.ids,
            },
        });
    }
    if ('chainIds' in args && args.chainIds !== undefined) {
        addFilter({
            chainId: { in: args.chainIds },
        });
    }
    if ('protocols' in args && args.protocols !== undefined) {
        addFilter({ protocol: { in: args.protocols } });
    }
    if ('isIncentivized' in args &&
        args.isIncentivized !== undefined &&
        args.isIncentivized) {
        addFilter({
            isIncentivized: args.isIncentivized,
        });
    }
    if ('isWhitelisted' in args &&
        args.isWhitelisted !== undefined &&
        args.isWhitelisted) {
        addFilter({
            token0: {
                status: 'APPROVED',
            },
            token1: {
                status: 'APPROVED',
            },
        });
    }
    if ('isWhitelisted' in args &&
        args.isWhitelisted !== undefined &&
        !args.isWhitelisted) {
        addFilter({
            OR: [
                {
                    token0: {
                        status: 'UNKNOWN',
                    },
                    token1: {
                        status: 'UNKNOWN',
                    },
                },
                {
                    token0: {
                        status: 'UNKNOWN',
                    },
                    token1: {
                        status: 'APPROVED',
                    },
                },
                {
                    token0: {
                        status: 'APPROVED',
                    },
                    token1: {
                        status: 'UNKNOWN',
                    },
                },
            ],
        });
    }
    if ('hasEnabledSteerVault' in args &&
        args.hasEnabledSteerVault !== undefined) {
        addFilter({
            hasEnabledSteerVault: args.hasEnabledSteerVault,
        });
    }
    if ('tokenSymbols' in args && Array.isArray(args.tokenSymbols)) {
        if (args.tokenSymbols.length === 1) {
            addFilter({
                OR: [
                    { token0: { symbol: { contains: args.tokenSymbols[0] } } },
                    { token1: { symbol: { contains: args.tokenSymbols[0] } } },
                ],
            });
        }
        else {
            // Create every possible set of two
            var sets = args.tokenSymbols.flatMap(function (token0, i, arr) {
                return arr.slice(i + 1).map(function (token1) { return [token0, token1]; });
            });
            addFilter({
                AND: [
                    {
                        OR: sets.flatMap(function (set) { return [
                            {
                                token0: { symbol: { contains: set[0] } },
                                token1: { symbol: { contains: set[1] } },
                            },
                            {
                                token0: { symbol: { contains: set[1] } },
                                token1: { symbol: { contains: set[0] } },
                            },
                        ]; }),
                    },
                ],
            });
        }
    }
    return where;
}
//# sourceMappingURL=parse.js.map