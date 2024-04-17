import { type GetCommonTokensArgs } from '../../../pure/tokens/chainId/common.js';
import { type SWRHookConfig } from '../../../types.js';
export declare const useCommonTokens: ({ args, shouldFetch, }: SWRHookConfig<GetCommonTokensArgs>) => import("swr/_internal").SWRResponse<{
    symbol: string;
    id: string;
    address: string;
    name: string;
    decimals: number;
    isFeeOnTransfer: boolean;
    isCommon: boolean;
}[], any, any>;
//# sourceMappingURL=common.d.ts.map