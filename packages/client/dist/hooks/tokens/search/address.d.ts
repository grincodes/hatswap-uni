import { type GetTokenSearchsArgs } from '../../../pure/tokens/search/address.js';
import { type SWRHookConfig } from '../../../types.js';
export declare const useSearchTokens: ({ args, shouldFetch, }: SWRHookConfig<GetTokenSearchsArgs>) => import("swr/_internal").SWRResponse<{
    symbol: string;
    status: import("@prisma/client").$Enums.TokenStatus;
    id: string;
    address: string;
    chainId: number;
    name: string;
    decimals: number;
    isFeeOnTransfer: boolean;
    isCommon: boolean;
}[], any, any>;
//# sourceMappingURL=address.d.ts.map