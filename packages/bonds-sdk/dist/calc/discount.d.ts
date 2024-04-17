interface GetBondDiscount {
    marketPrice: bigint;
    marketScale: bigint;
    payoutToken: {
        decimals: number;
        priceUSD: number;
    };
    quoteToken: {
        decimals: number;
        priceUSD: number;
    };
    fee?: number;
}
/**
 * @see https://dev.bondprotocol.finance/developers/market-calculations
 */
export declare function getBondDiscount({ payoutToken, quoteToken, marketScale, marketPrice, }: GetBondDiscount): {
    discount: number;
    quoteTokensPerPayoutToken: number;
    discountedPrice: number;
};
export {};
