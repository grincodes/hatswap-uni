import { Fraction } from 'sushi/math';
interface UsePrices {
    chainId: number | undefined;
    enabled?: boolean;
}
export declare const usePrices: ({ chainId, enabled }: UsePrices) => import("@tanstack/react-query").UseQueryResult<Record<string, Fraction>, unknown>;
export {};
//# sourceMappingURL=usePrices.d.ts.map