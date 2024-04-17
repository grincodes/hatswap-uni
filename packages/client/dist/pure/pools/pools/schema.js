import { z } from 'zod';
export var PoolsApiSchema = z.object({
    take: z.coerce.number().int().lte(1000).default(20),
    ids: z
        .string()
        .transform(function (ids) { return ids === null || ids === void 0 ? void 0 : ids.split(',').map(function (id) { return id.toLowerCase(); }); })
        .optional(),
    chainIds: z
        .string()
        .transform(function (val) { return val.split(',').map(function (v) { return parseInt(v); }); })
        .optional(),
    isIncentivized: z.coerce
        .string()
        .transform(function (val) {
        if (val === 'true') {
            return true;
        }
        else if (val === 'false') {
            return false;
        }
        else {
            throw new Error('isIncentivized must true or false');
        }
    })
        .optional(),
    isWhitelisted: z.coerce
        .string()
        .transform(function (val) {
        if (val === 'true') {
            return true;
        }
        else if (val === 'false') {
            return false;
        }
        else {
            throw new Error('isWhitelisted must true or false');
        }
    })
        .optional(),
    hasEnabledSteerVault: z.coerce
        .string()
        .transform(function (val) {
        if (val === 'true') {
            return true;
        }
        else if (val === 'false') {
            return false;
        }
        else {
            throw new Error('hasEnabledSteerVault must true or false');
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
    protocols: z
        .string()
        .transform(function (protocols) { return protocols === null || protocols === void 0 ? void 0 : protocols.split(','); })
        .optional(),
    cursor: z.string().optional(),
    orderBy: z.string().default('liquidityUSD'),
    orderDir: z.enum(['asc', 'desc']).default('desc'),
});
//# sourceMappingURL=schema.js.map