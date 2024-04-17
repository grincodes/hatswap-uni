import { type GetTokensArgs } from '../../pure/tokens/index.js';
import { type SWRHookConfig } from '../../types.js';
export declare const useTokens: ({ shouldFetch, }: SWRHookConfig<GetTokensArgs>) => import("swr/_internal").SWRResponse<{
    symbol: string;
    id: string;
    address: string;
    chainId: number;
    name: string;
    decimals: number;
    isFeeOnTransfer: boolean;
    isCommon: boolean;
}[], any, any>;
export * from './chainId/index.js';
export * from './search/index.js';
//# sourceMappingURL=index.d.ts.map