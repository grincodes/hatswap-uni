import {} from '@sushiswap/database'; // Unused as a regular import, but type is being used for casting
import { z } from 'zod';
export var PoolCountApiSchema = z.object({
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
        .optional()
        .transform(function (protocols) { return protocols === null || protocols === void 0 ? void 0 : protocols.split(','); }),
});
//# sourceMappingURL=schema.js.map