import { AuctionType, AuctionTypes, BONDS_ENABLED_CHAIN_IDS, getChainIdAuctioneerMarketFromMarketId, isBondChainId, } from '@sushiswap/bonds-sdk';
import { z } from 'zod';
export var BondsApiSchema = z.object({
    take: z.coerce.number().int().lte(1000).default(1000),
    ids: z
        .string()
        .transform(function (ids) {
        return ids === null || ids === void 0 ? void 0 : ids.split(',').map(function (id) { return getChainIdAuctioneerMarketFromMarketId(id.toLowerCase()); });
    })
        .optional(),
    chainIds: z
        .string()
        .optional()
        .default(BONDS_ENABLED_CHAIN_IDS.join(','))
        .transform(function (val) { return val.split(',').map(function (v) { return parseInt(v); }); })
        .transform(function (chainIds) { return chainIds.filter(isBondChainId); }),
    issuerNames: z
        .string()
        .transform(function (names) { return names === null || names === void 0 ? void 0 : names.split(','); })
        .optional(),
    anyIssuer: z.coerce
        .string()
        .optional()
        .default('false')
        .refine(function (val) { return ['true', 'false'].includes(val); }, {
        message: 'anyIssuer must true or false',
    })
        .transform(function (val) { return val === 'true'; }),
    onlyOpen: z.coerce
        .string()
        .optional()
        .default('true')
        .refine(function (val) { return ['true', 'false'].includes(val); }, {
        message: 'onlyOpen must true or false',
    })
        .transform(function (val) { return val === 'true'; }),
    onlyDiscounted: z.coerce
        .string()
        .optional()
        .default('false')
        .refine(function (val) { return ['true', 'false'].includes(val); }, {
        message: 'onlyDiscounted must true or false',
    })
        .transform(function (val) { return val === 'true'; }),
    auctionTypes: z
        .string()
        .optional()
        .default(AuctionTypes.join(','))
        .transform(function (types) { return types === null || types === void 0 ? void 0 : types.split(','); })
        .refine(function (types) {
        return types.every(function (type) { return AuctionTypes.includes(type); });
    }, {
        message: "Invalid auction types, valid options are: ".concat(AuctionTypes.join(', ')),
    })
        .transform(function (types) { return types; }),
    orderBy: z.string().default('discount'),
    orderDir: z.enum(['asc', 'desc']).default('desc'),
});
//# sourceMappingURL=schema.js.map