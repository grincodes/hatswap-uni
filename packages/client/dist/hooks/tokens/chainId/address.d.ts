import { type GetTokenArgs } from '../../../pure/tokens/chainId/address.js';
import { type SWRHookConfig } from '../../../types.js';
export declare const useToken: ({ args, shouldFetch, }: SWRHookConfig<GetTokenArgs>) => import("swr/_internal").SWRResponse<{
    symbol: string;
    status: import("@prisma/client").$Enums.TokenStatus;
    id: string;
    address: string;
    name: string;
    decimals: number;
    isFeeOnTransfer: boolean;
    isCommon: boolean;
} | {
    id: string;
    address: `0x${string}`;
    name: string | undefined;
    symbol: string | undefined;
    decimals: number;
    isCommon: boolean;
}, any, any>;
//# sourceMappingURL=address.d.ts.map