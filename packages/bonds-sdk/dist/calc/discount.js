/**
 * @see https://dev.bondprotocol.finance/developers/market-calculations
 */
export function getBondDiscount({ payoutToken, quoteToken, marketScale, marketPrice, }) {
    const baseScale = 10n ** BigInt(36 + payoutToken.decimals - quoteToken.decimals);
    const shift = Number(baseScale) / Number(marketScale);
    const price = Number(marketPrice) * shift;
    const quoteTokensPerPayoutToken = price / 10 ** 36;
    const discountedPrice = quoteTokensPerPayoutToken * quoteToken.priceUSD;
    const discount = -1 * (discountedPrice / payoutToken.priceUSD - 1);
    return {
        discount,
        quoteTokensPerPayoutToken,
        discountedPrice,
    };
}
