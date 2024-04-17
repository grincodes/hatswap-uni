import { getChainIdAuctioneerMarketFromMarketId } from '..';
import { bondFixedTermSDAAbi } from '../abi';
export function getMaxAmountsAcceptedContracts({ marketIds, referrer, }) {
    return marketIds.map((marketId) => {
        const { chainId, auctioneerAddress, marketNumber } = getChainIdAuctioneerMarketFromMarketId(marketId);
        return {
            abi: bondFixedTermSDAAbi,
            chainId,
            address: auctioneerAddress,
            functionName: 'maxAmountAccepted',
            args: [marketNumber, referrer],
        };
    });
}
export async function GetMaxAmountsAccepted({ client, marketIds, referrer, }) {
    const result = await client.multicall({
        allowFailure: true,
        contracts: getMaxAmountsAcceptedContracts({ marketIds, referrer }),
    });
    return result.flatMap((r, i) => r.result
        ? {
            marketId: marketIds[i],
            maxAmountAccepted: r.result,
        }
        : []);
}
export async function getMaxAmountAccepted({ client, marketId, referrer, }) {
    return (await GetMaxAmountsAccepted({ client, marketIds: [marketId], referrer }))[0];
}
