import { type GetPopularTokensArgs } from '../../../pure/tokens/chainId/popular.js';
import { type SWRHookConfig } from '../../../types.js';
export declare const usePopularTokens: ({ args, shouldFetch, }: SWRHookConfig<GetPopularTokensArgs>) => import("swr/_internal").SWRResponse<{
    id: string;
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    isCommon: boolean;
    isFeeOnTransfer: boolean;
    liquidityUSD: number;
}[], any, any>;
//# sourceMappingURL=popular.d.ts.map