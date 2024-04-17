import { getChainIdAuctioneerMarketFromMarketId } from '@sushiswap/bonds-sdk';
import { z } from 'zod';
export var BondApiSchema = z.object({
    marketId: z.string().transform(getChainIdAuctioneerMarketFromMarketId),
});
//# sourceMappingURL=schema.js.map