import { AuctionType, VestingType } from '@sushiswap/bonds-sdk';
import { isAddress } from 'viem';
import { z } from 'zod';
// Stolen from @sushiswap/rockset-client on the flair branch, TODO: move to a better place?
var chainId = function () { return z.coerce.number().int(); };
var address = function () {
    return z.string().transform(function (address) {
        if (!isAddress(address))
            throw new Error('Invalid address');
        return address.toLowerCase();
    });
};
var bigint = function () { return z.string().transform(function (val) { return BigInt(val); }); };
var token = function () {
    return z.object({
        address: address(),
        name: z.string(),
        symbol: z.string(),
        decimals: bigint(),
    });
};
var auctionTypes = {
    dynamic: AuctionType['Dynamic'],
    static: AuctionType['Static'],
    'oracle-static': AuctionType['Static'],
};
var vestingTypes = {
    'fixed-term': VestingType['Fixed-Term'],
};
// Graph object validation
export var BondSchema = z.object({
    id: z.string(),
    chainId: chainId(),
    type: z.string().transform(function (val) {
        if (!Object.keys(auctionTypes).includes(val))
            throw new Error('Invalid auction type');
        return auctionTypes[val];
    }),
    auctioneer: address(),
    teller: address(),
    marketId: bigint(),
    owner: address(),
    capacity: bigint(),
    capacityInQuote: z.boolean(),
    hasClosed: z.boolean(),
    start: bigint().nullable(),
    conclusion: bigint().nullable(),
    vesting: bigint(),
    vestingType: z.string().transform(function (val) {
        if (!Object.keys(vestingTypes).includes(val))
            throw new Error('Invalid vesting type');
        return vestingTypes[val];
    }),
    quoteToken: token(),
    totalBondedAmount: z.coerce.number(),
    payoutToken: token(),
    totalPayoutAmount: z.coerce.number(),
    minPrice: bigint().nullable(),
    scale: bigint().nullable(),
    averageBondPrice: z.coerce.number(),
    bondsIssued: bigint(),
});
export var BondPositionSchema = z.object({
    owner: address(),
    chainId: chainId(),
    balance: bigint(),
    bondToken: z.object({
        id: z.string(),
        expiry: bigint(),
        type: z.string(),
        teller: z.string(),
        underlying: token(),
    }),
});
//# sourceMappingURL=schema.js.map