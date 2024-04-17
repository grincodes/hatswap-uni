import type { PublicClient } from 'viem';
import { type MarketId } from '..';
export declare function getMarketInfosContracts({ marketIds, }: {
    marketIds: MarketId[];
}): {
    abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IBondTeller";
            readonly name: "teller_";
            readonly type: "address";
        }, {
            readonly internalType: "contract IBondAggregator";
            readonly name: "aggregator_";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "guardian_";
            readonly type: "address";
        }, {
            readonly internalType: "contract Authority";
            readonly name: "authority_";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "Auctioneer_AmountLessThanMinimum";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Auctioneer_BadExpiry";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Auctioneer_InitialPriceLessThanMin";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Auctioneer_InvalidCallback";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Auctioneer_InvalidParams";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "conclusion_";
            readonly type: "uint256";
        }];
        readonly name: "Auctioneer_MarketConcluded";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Auctioneer_MaxPayoutExceeded";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Auctioneer_NewMarketsNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Auctioneer_NotAuthorized";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Auctioneer_NotEnoughCapacity";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Auctioneer_OnlyMarketOwner";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "contract Authority";
            readonly name: "newAuthority";
            readonly type: "address";
        }];
        readonly name: "AuthorityUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "defaultTuneInterval";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "defaultTuneAdjustment";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "minDebtDecayInterval";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "minDepositInterval";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "minMarketDuration";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "minDebtBuffer";
            readonly type: "uint32";
        }];
        readonly name: "DefaultsUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "MarketClosed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "payoutToken";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "quoteToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "vesting";
            readonly type: "uint48";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "initialPrice";
            readonly type: "uint256";
        }];
        readonly name: "MarketCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnerUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "oldControlVariable";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newControlVariable";
            readonly type: "uint256";
        }];
        readonly name: "Tuned";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "adjustments";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "change";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint48";
            readonly name: "lastAdjustment";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "timeToAdjusted";
            readonly type: "uint48";
        }, {
            readonly internalType: "bool";
            readonly name: "active";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "allowNewMarkets";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "authority";
        readonly outputs: readonly [{
            readonly internalType: "contract Authority";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "callbackAuthorized";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }];
        readonly name: "closeMarket";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "params_";
            readonly type: "bytes";
        }];
        readonly name: "createMarket";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }];
        readonly name: "currentCapacity";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }];
        readonly name: "currentControlVariable";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }];
        readonly name: "currentDebt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "defaultTuneAdjustment";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "defaultTuneInterval";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAggregator";
        readonly outputs: readonly [{
            readonly internalType: "contract IBondAggregator";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }];
        readonly name: "getMarketInfoForPurchase";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "callbackAddr";
            readonly type: "address";
        }, {
            readonly internalType: "contract ERC20";
            readonly name: "payoutToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract ERC20";
            readonly name: "quoteToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint48";
            readonly name: "vesting";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPayout";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTeller";
        readonly outputs: readonly [{
            readonly internalType: "contract IBondTeller";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }];
        readonly name: "isInstantSwap";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }];
        readonly name: "isLive";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }];
        readonly name: "marketPrice";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }];
        readonly name: "marketScale";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "markets";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "contract ERC20";
            readonly name: "payoutToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract ERC20";
            readonly name: "quoteToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "callbackAddr";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "capacityInQuote";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "capacity";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalDebt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minPrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPayout";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "sold";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "purchased";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "scale";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "referrer_";
            readonly type: "address";
        }];
        readonly name: "maxAmountAccepted";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "metadata";
        readonly outputs: readonly [{
            readonly internalType: "uint48";
            readonly name: "lastTune";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "lastDecay";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint32";
            readonly name: "length";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "depositInterval";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "tuneInterval";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "tuneAdjustmentDelay";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "debtDecayInterval";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "tuneIntervalCapacity";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "tuneBelowCapacity";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastTuneDebt";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minDebtBuffer";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minDebtDecayInterval";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minDepositInterval";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minMarketDuration";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "newOwners";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }];
        readonly name: "ownerOf";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount_";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "referrer_";
            readonly type: "address";
        }];
        readonly name: "payoutFor";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }];
        readonly name: "pullOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount_";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmountOut_";
            readonly type: "uint256";
        }];
        readonly name: "purchaseBond";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "payout";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "newOwner_";
            readonly type: "address";
        }];
        readonly name: "pushOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "status_";
            readonly type: "bool";
        }];
        readonly name: "setAllowNewMarkets";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract Authority";
            readonly name: "newAuthority";
            readonly type: "address";
        }];
        readonly name: "setAuthority";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "creator_";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "status_";
            readonly type: "bool";
        }];
        readonly name: "setCallbackAuthStatus";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32[6]";
            readonly name: "defaults_";
            readonly type: "uint32[6]";
        }];
        readonly name: "setDefaults";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32[3]";
            readonly name: "intervals_";
            readonly type: "uint32[3]";
        }];
        readonly name: "setIntervals";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "setOwner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "terms";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "controlVariable";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxDebt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint48";
            readonly name: "vesting";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "conclusion";
            readonly type: "uint48";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    chainId: 1 | 137 | 42161 | 10;
    address: `0x${string}`;
    functionName: "getMarketInfoForPurchase";
    args: readonly [bigint];
}[];
interface GetMarketInfos {
    client: PublicClient;
    marketIds: MarketId[];
}
export declare function getMarketInfos({ client, marketIds }: GetMarketInfos): Promise<{
    marketId: `1:0x${string}:${number}` | `1:0x${string}:${bigint}` | `137:0x${string}:${number}` | `137:0x${string}:${bigint}` | `42161:0x${string}:${number}` | `42161:0x${string}:${bigint}` | `10:0x${string}:${number}` | `10:0x${string}:${bigint}`;
    owner: `0x${string}`;
    callbackAddress: `0x${string}`;
    payoutToken: `0x${string}`;
    quoteToken: `0x${string}`;
    vesting: number;
    maxPayout: bigint;
}[]>;
interface GetMarketInfo {
    client: PublicClient;
    marketId: MarketId;
}
export declare function getMarketInfo({ client, marketId }: GetMarketInfo): Promise<{
    marketId: `1:0x${string}:${number}` | `1:0x${string}:${bigint}` | `137:0x${string}:${number}` | `137:0x${string}:${bigint}` | `42161:0x${string}:${number}` | `42161:0x${string}:${bigint}` | `10:0x${string}:${number}` | `10:0x${string}:${bigint}`;
    owner: `0x${string}`;
    callbackAddress: `0x${string}`;
    payoutToken: `0x${string}`;
    quoteToken: `0x${string}`;
    vesting: number;
    maxPayout: bigint;
} | undefined>;
export {};
