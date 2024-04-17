import type { getTokens as _getTokens } from '@sushiswap/tokens-api/lib/api';
import { TokensApiSchema } from '@sushiswap/tokens-api/lib/schemas/index';
import { type GetApiInputFromOutput } from '../../types.js';
export { TokensApiSchema };
export type Token = Awaited<ReturnType<typeof _getTokens>>;
export type GetTokensArgs = GetApiInputFromOutput<(typeof TokensApiSchema)['_input'], (typeof TokensApiSchema)['_output']>;
export declare const getTokensUrl: () => string;
export declare const getTokens: () => Promise<Token>;
export * from './chainId/index.js';
export * from './search/index.js';
//# sourceMappingURL=index.d.ts.map