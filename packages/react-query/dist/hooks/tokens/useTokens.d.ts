import { Token } from 'sushi/currency';
interface UseTokensParams {
    chainId: number;
}
export declare const fetchTokensQueryFn: () => Promise<Record<number, Record<string, Token>>>;
export declare const useTokens: ({ chainId }: UseTokensParams) => import("@tanstack/react-query").UseQueryResult<Record<string, Token> | undefined, unknown>;
export {};
//# sourceMappingURL=useTokens.d.ts.map