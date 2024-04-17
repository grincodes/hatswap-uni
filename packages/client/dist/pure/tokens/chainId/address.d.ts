import type { getToken as _getToken } from '@sushiswap/tokens-api/lib/api';
import { TokenApiSchema } from '@sushiswap/tokens-api/lib/schemas/chainId/address';
import { type GetApiInputFromOutput } from '../../../types.js';
export { TokenApiSchema };
export type Token = Awaited<ReturnType<typeof _getToken>>;
export type GetTokenArgs = GetApiInputFromOutput<(typeof TokenApiSchema)['_input'], (typeof TokenApiSchema)['_output']> | string;
export declare const getTokenUrl: (args: GetTokenArgs) => string;
export declare const getToken: (args: GetTokenArgs) => Promise<Token>;
//# sourceMappingURL=address.d.ts.map