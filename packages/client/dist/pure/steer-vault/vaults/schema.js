import { z } from 'zod';
export var SteerVaultsApiSchema = z.object({
    take: z.coerce.number().int().lte(1000).default(1000),
    ids: z
        .string()
        .transform(function (ids) { return ids === null || ids === void 0 ? void 0 : ids.split(',').map(function (id) { return id.toLowerCase(); }); })
        .optional(),
    chainIds: z
        .string()
        .transform(function (val) { return val.split(',').map(function (v) { return parseInt(v); }); })
        .optional(),
    onlyEnabled: z.coerce
        .string()
        .transform(function (val) {
        switch (val) {
            case 'true':
                return true;
            case 'false':
                return false;
            default:
                throw new Error('onlyEnabled must true or false');
        }
    })
        .optional(),
    tokenSymbols: z
        .string()
        .transform(function (tokenSymbols) { return tokenSymbols === null || tokenSymbols === void 0 ? void 0 : tokenSymbols.split(','); })
        .refine(function (tokenSymbols) { return tokenSymbols.length <= 3; }, {
        message: 'Can only use up to 3 tokenSymbols.',
    })
        .optional(),
    cursor: z.string().optional(),
    orderBy: z.string().default('reserveUSD'),
    orderDir: z.enum(['asc', 'desc']).default('desc'),
});
//# sourceMappingURL=schema.js.map