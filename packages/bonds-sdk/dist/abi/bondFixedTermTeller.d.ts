export declare const bondFixedTermTellerAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "protocol_";
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
    readonly name: "Teller_InvalidCallback";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "Teller_InvalidParams";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "Teller_NotAuthorized";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract ERC20";
        readonly name: "underlying";
        readonly type: "address";
    }, {
        readonly internalType: "uint48";
        readonly name: "expiry";
        readonly type: "uint48";
    }];
    readonly name: "Teller_TokenDoesNotExist";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "maturesOn";
        readonly type: "uint48";
    }];
    readonly name: "Teller_TokenNotMatured";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "Teller_UnsupportedToken";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "ApprovalForAll";
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
        readonly internalType: "contract Authority";
        readonly name: "newAuthority";
        readonly type: "address";
    }];
    readonly name: "AuthorityUpdated";
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
        readonly name: "referrer";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "payout";
        readonly type: "uint256";
    }];
    readonly name: "Bonded";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "contract ERC20";
        readonly name: "underlying";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint48";
        readonly name: "expiry";
        readonly type: "uint48";
    }];
    readonly name: "ERC1155BondTokenCreated";
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
        readonly internalType: "address";
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "ids";
        readonly type: "uint256[]";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "amounts";
        readonly type: "uint256[]";
    }];
    readonly name: "TransferBatch";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "TransferSingle";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "FEE_DECIMALS";
    readonly outputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "";
        readonly type: "uint48";
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
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "owners";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "ids";
        readonly type: "uint256[]";
    }];
    readonly name: "balanceOfBatch";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "balances";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "tokenIds_";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amounts_";
        readonly type: "uint256[]";
    }];
    readonly name: "batchRedeem";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract ERC20[]";
        readonly name: "tokens_";
        readonly type: "address[]";
    }, {
        readonly internalType: "address";
        readonly name: "to_";
        readonly type: "address";
    }];
    readonly name: "claimFees";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract ERC20";
        readonly name: "underlying_";
        readonly type: "address";
    }, {
        readonly internalType: "uint48";
        readonly name: "expiry_";
        readonly type: "uint48";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount_";
        readonly type: "uint256";
    }];
    readonly name: "create";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "createFeeDiscount";
    readonly outputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract ERC20";
        readonly name: "underlying_";
        readonly type: "address";
    }, {
        readonly internalType: "uint48";
        readonly name: "expiry_";
        readonly type: "uint48";
    }];
    readonly name: "deploy";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "referrer_";
        readonly type: "address";
    }];
    readonly name: "getFee";
    readonly outputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract ERC20";
        readonly name: "underlying_";
        readonly type: "address";
    }, {
        readonly internalType: "uint48";
        readonly name: "expiry_";
        readonly type: "uint48";
    }];
    readonly name: "getTokenId";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tokenId_";
        readonly type: "uint256";
    }];
    readonly name: "getTokenNameAndSymbol";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
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
    readonly inputs: readonly [];
    readonly name: "protocolFee";
    readonly outputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "recipient_";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "referrer_";
        readonly type: "address";
    }, {
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
    readonly name: "purchase";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint48";
        readonly name: "";
        readonly type: "uint48";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tokenId_";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount_";
        readonly type: "uint256";
    }];
    readonly name: "redeem";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "referrerFees";
    readonly outputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "contract ERC20";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "rewards";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "ids";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amounts";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "safeBatchTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
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
        readonly internalType: "uint48";
        readonly name: "discount_";
        readonly type: "uint48";
    }];
    readonly name: "setCreateFeeDiscount";
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
        readonly internalType: "uint48";
        readonly name: "fee_";
        readonly type: "uint48";
    }];
    readonly name: "setProtocolFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "fee_";
        readonly type: "uint48";
    }];
    readonly name: "setReferrerFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "interfaceId";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
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
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "tokenMetadata";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "active";
        readonly type: "bool";
    }, {
        readonly internalType: "contract ERC20";
        readonly name: "underlying";
        readonly type: "address";
    }, {
        readonly internalType: "uint8";
        readonly name: "decimals";
        readonly type: "uint8";
    }, {
        readonly internalType: "uint48";
        readonly name: "expiry";
        readonly type: "uint48";
    }, {
        readonly internalType: "uint256";
        readonly name: "supply";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
