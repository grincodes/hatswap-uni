import { z } from 'zod';
export var SteerVaultApiSchema = z.object({
    chainId: z.coerce
        .number()
        .int()
        .gte(0)
        .lte(Math.pow(2, 256)),
    address: z.coerce.string(),
});
//# sourceMappingURL=schema.js.map