import type { UseTradeParams, UseTradeQuerySelect } from './types';
export declare const useTradeQuery: ({ chainId, fromToken, toToken, amount, gasPrice, slippagePercentage, recipient, source, enabled, onError, }: UseTradeParams, select: UseTradeQuerySelect) => import("@tanstack/react-query").UseQueryResult<import("./types").UseTradeReturn, unknown>;
export declare const useTrade: (variables: UseTradeParams) => import("@tanstack/react-query").UseQueryResult<import("./types").UseTradeReturn, unknown>;
//# sourceMappingURL=useTrade.d.ts.map