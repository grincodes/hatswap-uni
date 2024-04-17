import { deepmergeInto } from 'deepmerge-ts';
import {} from '../../pure/steer-vault/count/schema';
import {} from '../../pure/steer-vault/vaults/schema';
export function parseSteerArgs(args) {
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
    if ('onlyEnabled' in args && args.onlyEnabled === true) {
        addFilter({
            isEnabled: true,
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