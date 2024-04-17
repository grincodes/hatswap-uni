import { getTokenAddressesByChainId } from '@sushiswap/tokens-api/lib/api';
import { TokenAddressesApiSchema } from '@sushiswap/tokens-api/lib/schemas/chainId/addresses';
import { type GetApiInputFromOutput } from '../../../types.js';
export { TokenAddressesApiSchema };
export type TokenAddress = Awaited<ReturnType<typeof getTokenAddressesByChainId>>;
export type GetTokenAddressesArgs = GetApiInputFromOutput<(typeof TokenAddressesApiSchema)['_input'], (typeof TokenAddressesApiSchema)['_output']>;
export declare const getTokenAddressesUrl: (args: GetTokenAddressesArgs) => string;
export declare const getTokenAddresses: (args: GetTokenAddressesArgs) => Promise<TokenAddress>;
//# sourceMappingURL=addresses.d.ts.map