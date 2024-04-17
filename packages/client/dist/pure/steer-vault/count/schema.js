import { z } from 'zod';
export var SteerVaultCountApiSchema = z.object({
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
});
//# sourceMappingURL=schema.js.map