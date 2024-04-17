import { getChainIdAuctioneerMarketFromMarketId } from '..';
import { bondFixedTermSDAAbi } from '../abi';
export function getRemainingCapacitiesContracts({ marketIds, }) {
    return marketIds.map((marketId) => {
        const { chainId, auctioneerAddress, marketNumber } = getChainIdAuctioneerMarketFromMarketId(marketId);
        return {
            abi: bondFixedTermSDAAbi,
            chainId,
            address: auctioneerAddress,
            functionName: 'currentCapacity',
            args: [marketNumber],
        };
    });
}
export async function getRemainingCapacities({ client, marketIds, }) {
    const result = await client.multicall({
        allowFailure: true,
        contracts: getRemainingCapacitiesContracts({ marketIds }),
    });
    return result.flatMap((r, i) => r.result
        ? {
            marketId: marketIds[i],
            remainingCapacity: r.result,
        }
        : []);
}
export async function getRemainingCapacity({ client, marketId, }) {
    return (await getRemainingCapacities({ client, marketIds: [marketId] }))[0];
}
