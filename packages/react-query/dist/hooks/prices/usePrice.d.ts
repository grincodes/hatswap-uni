import { Fraction } from 'sushi/math';
interface UsePrice {
    chainId: number | undefined;
    address: string | undefined;
    enabled?: boolean;
}
export declare const usePrice: ({ chainId, address, enabled }: UsePrice) => import("@tanstack/react-query").UseQueryResult<Fraction, unknown>;
export {};
//# sourceMappingURL=usePrice.d.ts.map