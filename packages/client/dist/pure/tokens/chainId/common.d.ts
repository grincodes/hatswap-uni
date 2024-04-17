import type { getCommonTokens as _getCommonTokens } from '@sushiswap/tokens-api/lib/api';
import { CommonTokensApiSchema } from '@sushiswap/tokens-api/lib/schemas/chainId/common';
import { type GetApiInputFromOutput } from '../../../types.js';
export { CommonTokensApiSchema };
export type CommonToken = Awaited<ReturnType<typeof _getCommonTokens>>;
export type GetCommonTokensArgs = GetApiInputFromOutput<(typeof CommonTokensApiSchema)['_input'], (typeof CommonTokensApiSchema)['_output']>;
export declare const getCommonTokensUrl: (args: GetCommonTokensArgs) => string;
export declare const getCommonTokens: (args: GetCommonTokensArgs) => Promise<CommonToken>;
//# sourceMappingURL=common.d.ts.map