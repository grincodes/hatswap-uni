import { getChainIdAddressFromId } from 'sushi';
import { bondFixedTermTellerAbi } from '../abi';
export function getReferrerFeesContracts({ args }) {
    return args.map(({ referrerId, tellerId }) => {
        const { chainId, address: referrerAddress } = getChainIdAddressFromId(referrerId);
        const { address: tellerAddress } = getChainIdAddressFromId(tellerId);
        return {
            abi: bondFixedTermTellerAbi,
            chainId,
            address: tellerAddress,
            functionName: 'referrerFees',
            args: [referrerAddress],
        };
    });
}
export async function getReferrerFees({ client, args }) {
    const result = await client.multicall({
        allowFailure: true,
        contracts: getReferrerFeesContracts({ args }),
    });
    return result.flatMap((r, i) => r.result
        ? {
            referrerId: args[i].referrerId,
            tellerId: args[i].tellerId,
            referrerFee: r.result,
        }
        : []);
}
export async function getReferrerFee({ client, arg }) {
    return (await getReferrerFees({ client, args: [arg] }))[0];
}
