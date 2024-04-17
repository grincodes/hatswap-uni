import type { getPopularTokens as _getPopularTokens } from '@sushiswap/tokens-api/lib/api';
import { PopularTokensApiSchema } from '@sushiswap/tokens-api/lib/schemas/chainId/popular';
import { type GetApiInputFromOutput } from '../../../types.js';
export { PopularTokensApiSchema };
export type PopularToken = Awaited<ReturnType<typeof _getPopularTokens>>;
export type GetPopularTokensArgs = GetApiInputFromOutput<(typeof PopularTokensApiSchema)['_input'], (typeof PopularTokensApiSchema)['_output']>;
export declare const getPopularTokensUrl: (args: GetPopularTokensArgs) => string;
export declare const getPopularTokens: (args: GetPopularTokensArgs) => Promise<PopularToken>;
//# sourceMappingURL=popular.d.ts.map