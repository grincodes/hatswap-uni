import { getTokensByAddress } from '@sushiswap/tokens-api/lib/api';
import { SearchTokenApiSchema } from '@sushiswap/tokens-api/lib/schemas/search/address';
import { type GetApiInputFromOutput } from '../../../types.js';
export { SearchTokenApiSchema };
export type TokenSearch = Awaited<ReturnType<typeof getTokensByAddress>>;
export type GetTokenSearchsArgs = GetApiInputFromOutput<(typeof SearchTokenApiSchema)['_input'], (typeof SearchTokenApiSchema)['_output']>;
export declare const getSearchTokensUrl: (args: GetTokenSearchsArgs) => string;
export declare const getSearchTokens: (args: GetTokenSearchsArgs) => Promise<TokenSearch>;
//# sourceMappingURL=address.d.ts.map