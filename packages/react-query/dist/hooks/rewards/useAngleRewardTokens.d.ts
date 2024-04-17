import { ChainId } from 'sushi/chain';
import { Token } from 'sushi/currency';
interface UseAngleRewardTokensParams {
    chainId: ChainId;
}
export declare const useAngleRewardTokens: ({ chainId, }: UseAngleRewardTokensParams) => import("@tanstack/react-query").UseQueryResult<{
    minimumAmountPerEpoch: import("sushi/currency").Amount<Token> | undefined;
    token: Token;
}[], unknown>;
export {};
//# sourceMappingURL=useAngleRewardTokens.d.ts.map