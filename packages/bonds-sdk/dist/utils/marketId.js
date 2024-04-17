import { unsanitize } from 'sushi/format';
export const getMarketIdFromChainIdAuctioneerMarket = ({ chainId, auctioneerAddress, marketNumber, }) => {
    return `${chainId}:${auctioneerAddress}:${marketNumber}`;
};
export const getChainIdAuctioneerMarketFromMarketId = (marketId) => {
    const [chainId, auctioneerAddress, marketNumber] = unsanitize(marketId).split(':');
    if (!chainId || !auctioneerAddress || !marketNumber)
        throw new Error(`Invalid id: ${marketId}`);
    return {
        chainId: Number(chainId),
        auctioneerAddress,
        marketNumber: BigInt(marketNumber),
    };
};
