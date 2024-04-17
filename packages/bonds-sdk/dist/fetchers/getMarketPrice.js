import { getChainIdAuctioneerMarketFromMarketId } from '..';
import { bondFixedTermSDAAbi } from '../abi';
export function getMarketPricesContracts({ marketIds, }) {
    return marketIds.map((marketId) => {
        const { chainId, auctioneerAddress, marketNumber } = getChainIdAuctioneerMarketFromMarketId(marketId);
        return {
            abi: bondFixedTermSDAAbi,
            chainId,
            address: auctioneerAddress,
            functionName: 'marketPrice',
            args: [marketNumber],
        };
    });
}
export async function getMarketsPrices({ client, marketIds, }) {
    const result = await client.multicall({
        allowFailure: true,
        contracts: getMarketPricesContracts({ marketIds }),
    });
    return result.flatMap((r, i) => r.result
        ? {
            marketId: marketIds[i],
            marketPrice: r.result,
        }
        : []);
}
export async function getMarketPrice({ client, marketId }) {
    return (await getMarketsPrices({ client, marketIds: [marketId] }))[0];
}
