import { getChainIdAuctioneerMarketFromMarketId } from '..';
import { bondFixedTermSDAAbi } from '../abi';
export function getMarketInfosContracts({ marketIds, }) {
    return marketIds.map((marketId) => {
        const { chainId, auctioneerAddress, marketNumber } = getChainIdAuctioneerMarketFromMarketId(marketId);
        return {
            abi: bondFixedTermSDAAbi,
            chainId,
            address: auctioneerAddress,
            functionName: 'getMarketInfoForPurchase',
            args: [marketNumber],
        };
    });
}
export async function getMarketInfos({ client, marketIds }) {
    const result = await client.multicall({
        allowFailure: true,
        contracts: getMarketInfosContracts({ marketIds }),
    });
    return result.flatMap((r, i) => r.result
        ? {
            marketId: marketIds[i],
            owner: r.result[0],
            callbackAddress: r.result[1],
            payoutToken: r.result[2],
            quoteToken: r.result[3],
            vesting: r.result[4],
            maxPayout: r.result[5],
        }
        : []);
}
export async function getMarketInfo({ client, marketId }) {
    return (await getMarketInfos({ client, marketIds: [marketId] }))[0];
}
