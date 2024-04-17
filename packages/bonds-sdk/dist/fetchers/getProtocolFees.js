import { getChainIdAddressFromId } from 'sushi';
import { bondFixedTermTellerAbi } from '../abi';
export function getProtocolFeesContracts({ tellerIds, }) {
    return tellerIds.map((tellerId) => {
        const { chainId, address } = getChainIdAddressFromId(tellerId);
        return {
            abi: bondFixedTermTellerAbi,
            chainId,
            address: address,
            functionName: 'protocolFee',
        };
    });
}
export async function getProtocolFees({ client, tellerIds }) {
    const result = await client.multicall({
        allowFailure: true,
        contracts: getProtocolFeesContracts({ tellerIds }),
    });
    return result.flatMap((r, i) => r.result
        ? {
            tellerId: tellerIds[i],
            protocolFee: r.result,
        }
        : []);
}
export async function getProtocolFee({ client, tellerId }) {
    return (await getProtocolFees({ client, tellerIds: [tellerId] }))[0];
}
