import { BONDS_ENABLED_CHAIN_IDS, isBondChainId } from '@sushiswap/bonds-sdk';
import { z } from 'zod';
export var BondsPositionsApiSchema = z.object({
    userAddress: z.string().transform(function (address) { return address.toLowerCase(); }),
    onlyUnclaimedBonds: z.coerce
        .string()
        .optional()
        .default('true')
        .transform(function (val) {
        if (val === 'true') {
            return true;
        }
        else if (val === 'false') {
            return false;
        }
        else {
            throw new Error('onlyUnclaimedBonds must true or false');
        }
    }),
    payoutTokenId: z
        .string()
        .transform(function (id) { return id.toLowerCase(); })
        .optional(),
    chainIds: z
        .string()
        .optional()
        .default(BONDS_ENABLED_CHAIN_IDS.join(','))
        .transform(function (val) { return val.split(',').map(function (v) { return parseInt(v); }); })
        .transform(function (chainIds) { return chainIds.filter(isBondChainId); }),
});
//# sourceMappingURL=schema.js.map