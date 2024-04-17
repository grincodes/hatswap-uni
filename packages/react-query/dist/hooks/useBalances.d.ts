import { Amount, type Type } from 'sushi/currency';
export declare const NativeAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
type UseBalancesQuerySelect = (data: Record<string, string>) => Record<string, Amount<Type>>;
interface UseBalances {
    account: string | undefined;
    chainId: number;
    enabled?: boolean;
}
export declare const useBalancesQuery: ({ chainId, account, enabled }: UseBalances, select: UseBalancesQuerySelect) => import("@tanstack/react-query").UseQueryResult<Record<string, Amount<Type>>, unknown>;
export declare const useBalances: (variables: UseBalances) => import("@tanstack/react-query").UseQueryResult<Record<string, Amount<Type>>, unknown>;
export {};
//# sourceMappingURL=useBalances.d.ts.map