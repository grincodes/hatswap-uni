import { getTokenIdsByChainId } from '@sushiswap/tokens-api/lib/api';
import { TokenIdsApiSchema } from '@sushiswap/tokens-api/lib/schemas/chainId/ids';
import { type GetApiInputFromOutput } from '../../../types.js';
export { TokenIdsApiSchema };
export type TokenId = Awaited<ReturnType<typeof getTokenIdsByChainId>>;
export type GetTokenIdsArgs = GetApiInputFromOutput<(typeof TokenIdsApiSchema)['_input'], (typeof TokenIdsApiSchema)['_output']>;
export declare const getTokenIdsUrl: (args: GetTokenIdsArgs) => string;
export declare const getTokenIds: (args: GetTokenIdsArgs) => Promise<TokenId>;
//# sourceMappingURL=ids.d.ts.map