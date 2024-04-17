import { ChainId } from 'sushi/chain';
import { Token } from 'sushi/currency';
interface UseTokenParams<T extends boolean> {
    chainId: ChainId | undefined;
    address: string | undefined;
    withStatus?: T;
    enabled?: boolean;
}
type UseTokenReturn<T> = T extends true ? {
    token: Token;
    status: 'UNKNOWN' | 'APPROVED' | 'DISAPPROVED';
} : Token;
/**
 * @deprecated use @sushiswap/wagmi/useTokenWithCache
 */
export declare const useToken: <T extends boolean = false>({ chainId, address, withStatus, enabled, }: UseTokenParams<T>) => import("@tanstack/react-query").UseQueryResult<UseTokenReturn<T> | undefined, unknown>;
export {};
//# sourceMappingURL=useToken.d.ts.map