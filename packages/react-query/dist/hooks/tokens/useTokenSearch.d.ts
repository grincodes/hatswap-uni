import { Token } from 'sushi/currency';
interface UseTokensParams {
    address: string | undefined;
    enabled?: boolean;
}
export declare const useTokenSearch: ({ address, enabled, }: UseTokensParams) => import("@tanstack/react-query").UseQueryResult<Record<string, {
    token: Token;
    official: boolean;
}>, unknown>;
export {};
//# sourceMappingURL=useTokenSearch.d.ts.map