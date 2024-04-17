import { ChainId } from 'sushi/chain';
import * as sushi from 'sushi';
import { Address, PublicClient } from 'viem';

declare const STEER_SUPPORTED_CHAIN_IDS: (8453 | 10 | 56 | 108 | 137 | 1088 | 1101 | 42161 | 42220 | 43114)[];
declare const SteerChainIds: (8453 | 10 | 56 | 108 | 137 | 1088 | 1101 | 42161 | 42220 | 43114)[];
type SteerChainId = (typeof STEER_SUPPORTED_CHAIN_IDS)[number];
declare const isSteerChainId: (chainId: ChainId) => chainId is 8453 | 10 | 56 | 108 | 137 | 1088 | 1101 | 42161 | 42220 | 43114;
declare const STEER_PERIPHERY_ADDRESS: Record<SteerChainId, `0x${string}`>;

interface GetBalanceOfsContracts {
    account: Address;
    vaultIds: string[];
}
declare function getBalanceOfsContracts({ account, vaultIds, }: GetBalanceOfsContracts): {
    abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "supply";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_spender";
            readonly type: "address";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly name: "_spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly payable: true;
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }];
    chainId: sushi.ChainId;
    address: `0x${string}`;
    args: readonly [`0x${string}`];
    functionName: "balanceOf";
}[];
interface GetBalanceOfs extends GetBalanceOfsContracts {
    client: PublicClient;
}
declare function getBalanceOfs({ client, account, vaultIds, }: GetBalanceOfs): Promise<{
    vaultId: string;
    balance: bigint;
}[]>;
declare function getBalanceOfsSelect(vaultId: string, result: bigint): {
    vaultId: string;
    balance: bigint;
};
interface GetBalanceOf {
    client: PublicClient;
    account: Address;
    vaultId: string;
}
declare function getBalanceOf({ client, account, vaultId }: GetBalanceOf): Promise<bigint>;

interface Payload {
    strategyConfigData: {
        period: number;
        standardDeviations: number;
        poolFee: number;
        epochStart: number;
        epochLength: string;
        name: string;
        description: string;
        appImgUrl: string;
    };
    vaultPayload: {
        fee: number;
        slippage: number;
        ratioErrorTolerance: number;
        maxTicksChange: number;
        twapInterval: number;
    };
}
interface GetStrategiesPayloads {
    payloadHashes: string[];
}
declare function getStrategiesPayloads({ payloadHashes, }: GetStrategiesPayloads): Promise<(Payload | null)[]>;
interface GetPayload {
    payloadHash: string;
}
declare function getStrategyPayload({ payloadHash }: GetPayload): Promise<Payload>;

interface GetVaultsAprs$1 {
    vaultIds: string[];
}
declare function getVaultsAprs({ vaultIds }: GetVaultsAprs$1): Promise<({
    apr: number;
    apr1d: number;
    apr1w: number;
} | null)[]>;
interface GetVaultsApr$1 {
    vaultId: string;
}
declare function getVaultAprs({ vaultId }: GetVaultsApr$1): Promise<{
    apr: number;
    apr1d: number;
    apr1w: number;
}>;

interface GetTotalSuppliesContracts {
    vaultIds: string[];
}
declare function getTotalSuppliesContracts({ vaultIds, }: GetTotalSuppliesContracts): {
    abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "supply";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_spender";
            readonly type: "address";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly name: "_spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly payable: true;
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }];
    chainId: sushi.ChainId;
    address: `0x${string}`;
    functionName: "totalSupply";
}[];
interface GetTotalSupplies extends GetTotalSuppliesContracts {
    client: PublicClient;
}
declare function getTotalSupplies({ client, vaultIds }: GetTotalSupplies): Promise<{
    vaultId: string;
    totalSupply: bigint;
}[]>;
declare function getTotalSuppliesSelect(vaultId: string, result: bigint): {
    vaultId: string;
    totalSupply: bigint;
};
interface GetTotalSupply {
    client: PublicClient;
    vaultId: string;
}
declare function getTotalSupply({ client, vaultId }: GetTotalSupply): Promise<bigint>;

interface GetVaultsAprs {
    vaultIds: string[];
}
declare function getVaultsAprTimeseries({ vaultIds }: GetVaultsAprs): Promise<({
    startTime: number;
    endTime: number;
    feeApr: number;
}[] | null)[]>;
interface GetVaultsApr {
    vaultId: string;
}
declare function getSteerVaultAprTimeseries({ vaultId }: GetVaultsApr): Promise<{
    startTime: number;
    endTime: number;
    feeApr: number;
}[]>;

interface GetVaultsMaxTickChanges {
    client: PublicClient;
    vaultIds: string[];
}
declare function getVaultsMaxTickChanges({ client, vaultIds, }: GetVaultsMaxTickChanges): Promise<{
    vaultId: string;
    maxTickChange: number;
}[]>;
declare function getVaultsMaxTickChangesSelect(vaultId: string, result: number): {
    vaultId: string;
    maxTickChange: number;
};
interface GetVaultMaxTickChange {
    client: PublicClient;
    vaultId: string;
}
declare function getVaultMaxTickChange({ client, vaultId, }: GetVaultMaxTickChange): Promise<{
    vaultId: string;
    maxTickChange: number;
}>;

interface GetVaultPositionsContracts {
    vaultIds: string[];
}
declare function getVaultPositionsContracts({ vaultIds, }: GetVaultPositionsContracts): {
    abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }];
        readonly name: "Deposit";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount0Earned";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount1Earned";
            readonly type: "uint256";
        }];
        readonly name: "FeesEarned";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Paused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "previousAdminRole";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newAdminRole";
            readonly type: "bytes32";
        }];
        readonly name: "RoleAdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleGranted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleRevoked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint160";
            readonly name: "sqrtPriceX96";
            readonly type: "uint160";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "totalAmount0";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "totalAmount1";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "totalSupply";
            readonly type: "uint256";
        }];
        readonly name: "Snapshot";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
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
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Unpaused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }];
        readonly name: "Withdraw";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "STEER_FRACTION_OF_FEE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "TOTAL_FEE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "accruedSteerFees0";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "accruedSteerFees1";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "accruedStrategistFees0";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "accruedStrategistFees1";
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
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
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
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
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
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount0Desired";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1Desired";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount0Min";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1Min";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount0Used";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1Used";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int24";
            readonly name: "tickLower";
            readonly type: "int24";
        }, {
            readonly internalType: "int24";
            readonly name: "tickUpper";
            readonly type: "int24";
        }, {
            readonly internalType: "uint128";
            readonly name: "liquidity";
            readonly type: "uint128";
        }];
        readonly name: "emergencyBurn";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPositions";
        readonly outputs: readonly [{
            readonly internalType: "int24[]";
            readonly name: "";
            readonly type: "int24[]";
        }, {
            readonly internalType: "int24[]";
            readonly name: "";
            readonly type: "int24[]";
        }, {
            readonly internalType: "uint16[]";
            readonly name: "";
            readonly type: "uint16[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleAdmin";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getRoleMember";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleMemberCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTotalAmounts";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "total0";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "total1";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "grantRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "hasRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_vaultManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_steer";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_params";
            readonly type: "bytes";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxTickChange";
        readonly outputs: readonly [{
            readonly internalType: "int24";
            readonly name: "";
            readonly type: "int24";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "paused";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "poke";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pool";
        readonly outputs: readonly [{
            readonly internalType: "contract IUniswapV3Pool";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "renounceRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokeRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "steerCollectFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "strategistCollectFees";
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
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "totalWeight";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "int24[]";
                readonly name: "lowerTick";
                readonly type: "int24[]";
            }, {
                readonly internalType: "int24[]";
                readonly name: "upperTick";
                readonly type: "int24[]";
            }, {
                readonly internalType: "uint16[]";
                readonly name: "relativeWeight";
                readonly type: "uint16[]";
            }];
            readonly internalType: "struct MultiPositionLiquidityManager.LiquidityPositions";
            readonly name: "newPositions";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "timeSensitiveData";
            readonly type: "bytes";
        }];
        readonly name: "tend";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token0";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token1";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
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
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "twapInterval";
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
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "uniswapV3MintCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int256";
            readonly name: "amount0Wanted";
            readonly type: "int256";
        }, {
            readonly internalType: "int256";
            readonly name: "amount1Wanted";
            readonly type: "int256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "uniswapV3SwapCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unpause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount0Min";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1Min";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    chainId: sushi.ChainId;
    address: `0x${string}`;
    functionName: "getPositions";
}[];
interface GetVaultsPositions extends GetVaultPositionsContracts {
    client: PublicClient;
}
declare function getVaultsPositions({ client, vaultIds, }: GetVaultsPositions): Promise<{
    vaultId: string;
    lowerTick: bigint;
    upperTick: bigint;
    relativeWeight: bigint;
}[]>;
declare function getVaultsPositionSelect(vaultId: string, result: Readonly<[
    Readonly<number[]>,
    Readonly<number[]>,
    Readonly<number[]>
]>): {
    vaultId: string;
    lowerTick: bigint;
    upperTick: bigint;
    relativeWeight: bigint;
}[];
interface GetVaultPositions {
    client: PublicClient;
    vaultId: string;
}
declare function getVaultPositions({ client, vaultId, }: GetVaultPositions): Promise<{
    vaultId: string;
    lowerTick: bigint;
    upperTick: bigint;
    relativeWeight: bigint;
}[]>;

interface GetVaultsReservesContracts {
    vaultIds: string[];
}
declare function getVaultsReservesContracts({ vaultIds, }: GetVaultsReservesContracts): {
    abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "previousAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "AdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "admin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "changeAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "implementation";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "beacon";
            readonly type: "address";
        }];
        readonly name: "BeaconUpgraded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "params";
                readonly type: "bytes";
            }, {
                readonly internalType: "string";
                readonly name: "beaconName";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "vaultManager";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "payloadIpfs";
                readonly type: "string";
            }];
            readonly internalType: "struct ISteerPeriphery.CVDGParams";
            readonly name: "cvdgParams";
            readonly type: "tuple";
        }];
        readonly name: "createVaultAndDepositGas";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newVault";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "strategyCreator";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "execBundle";
                readonly type: "string";
            }, {
                readonly internalType: "uint128";
                readonly name: "maxGasCost";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "maxGasPerAction";
                readonly type: "uint128";
            }, {
                readonly internalType: "bytes";
                readonly name: "params";
                readonly type: "bytes";
            }, {
                readonly internalType: "string";
                readonly name: "beaconName";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "vaultManager";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "payloadIpfs";
                readonly type: "string";
            }];
            readonly internalType: "struct ISteerPeriphery.CVSParams";
            readonly name: "cvsParams";
            readonly type: "tuple";
        }];
        readonly name: "createVaultAndStrategy";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "newVault";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "strategyCreator";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "execBundle";
                readonly type: "string";
            }, {
                readonly internalType: "uint128";
                readonly name: "maxGasCost";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "maxGasPerAction";
                readonly type: "uint128";
            }, {
                readonly internalType: "bytes";
                readonly name: "jobInitParams";
                readonly type: "bytes";
            }, {
                readonly internalType: "string";
                readonly name: "beaconName";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "vaultManager";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "payloadIpfs";
                readonly type: "string";
            }, {
                readonly internalType: "bytes[]";
                readonly name: "userProvidedData";
                readonly type: "bytes[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "targetAddresses";
                readonly type: "address[]";
            }, {
                readonly internalType: "string";
                readonly name: "jobName";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "ipfsForJobDetails";
                readonly type: "string";
            }];
            readonly internalType: "struct ISteerPeriphery.CVSRJParams";
            readonly name: "cvsrjParams";
            readonly type: "tuple";
        }];
        readonly name: "createVaultStrategyAndRegisterJob";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "newVault";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "vaultAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount0Desired";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1Desired";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount0Min";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1Min";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "vaultAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount0Desired";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1Desired";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount0Min";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1Min";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "poolId";
            readonly type: "uint256";
        }];
        readonly name: "depositAndStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_strategyRegistry";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_vaultRegistry";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_gasVault";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_stakingRewards";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "_nodeConfig";
            readonly type: "string";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "nodeConfig";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
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
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_nodeConfig";
            readonly type: "string";
        }];
        readonly name: "setNodeConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "creator";
            readonly type: "address";
        }];
        readonly name: "strategiesByCreator";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "execBundle";
                readonly type: "string";
            }, {
                readonly internalType: "uint128";
                readonly name: "maxGasCost";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "maxGasPerAction";
                readonly type: "uint128";
            }];
            readonly internalType: "struct IStrategyRegistry.RegisteredStrategy[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "vault";
            readonly type: "address";
        }];
        readonly name: "vaultBalancesByAddressWithFees";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amountToken0";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountToken1";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IMultiPositionManager.VaultBalance";
            readonly name: "balances";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "vault";
            readonly type: "address";
        }];
        readonly name: "vaultDetailsByAddress";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "vaultType";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "token0";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "token1";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "symbol";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "decimals";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "token0Name";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "token1Name";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "token0Symbol";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "token1Symbol";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "token0Decimals";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "token1Decimals";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "feeTier";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalLPTokensIssued";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "token0Balance";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "token1Balance";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "vaultCreator";
                readonly type: "address";
            }];
            readonly internalType: "struct IMultiPositionManager.VaultDetails";
            readonly name: "details";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "strategyId";
            readonly type: "uint256";
        }];
        readonly name: "vaultsByStrategy";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "enum IVaultRegistry.VaultState";
                readonly name: "state";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vaultID";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "payloadIpfs";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "vaultAddress";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "beaconName";
                readonly type: "string";
            }];
            readonly internalType: "struct IVaultRegistry.VaultData[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "initialLogic";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "initialAdmin";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly stateMutability: "payable";
        readonly type: "constructor";
    }];
    address: `0x${string}`;
    chainId: 8453 | 10 | 56 | 108 | 137 | 1088 | 1101 | 42161 | 42220 | 43114;
    args: readonly [`0x${string}`];
    functionName: "vaultBalancesByAddressWithFees";
}[];
interface GetVaultsReserves extends GetVaultsReservesContracts {
    client: PublicClient;
}
declare function getVaultsReserves({ client, vaultIds, }: GetVaultsReserves): Promise<({
    vaultId: string;
    reserve0: bigint;
    reserve1: bigint;
} | null)[]>;
declare function getVaultsReservesSelect(vaultId: string, result: {
    amountToken0: bigint;
    amountToken1: bigint;
}): {
    vaultId: string;
    reserve0: bigint;
    reserve1: bigint;
};
interface GetVaultReserves {
    client: PublicClient;
    vaultId: string;
}
declare function getVaultReserves({ client, vaultId }: GetVaultReserves): Promise<{
    vaultId: string;
    reserve0: bigint;
    reserve1: bigint;
}>;

interface GetTokenRatiosProps {
    vault: {
        chainId: number;
        token0: {
            address: string;
            decimals: number;
        };
        token1: {
            address: string;
            decimals: number;
        };
        reserve0: string;
        reserve1: string;
    };
    prices: Record<string, number>;
}
declare function getTokenRatios({ vault, prices }: GetTokenRatiosProps): Promise<{
    token0: number;
    token1: number;
}>;

interface GetAccountPositions {
    accountBalances: {
        vaultId: string;
        balance: bigint;
    }[];
    totalSupplies: {
        vaultId: string;
        totalSupply: bigint;
    }[];
    vaultReserves: {
        vaultId: string;
        reserve0: bigint;
        reserve1: bigint;
    }[];
}
declare function getAccountPositions({ accountBalances, totalSupplies, vaultReserves, }: GetAccountPositions): {
    id: string;
    address: `0x${string}`;
    chainId: sushi.ChainId;
    steerTokenSupply: bigint;
    steerTokenBalance: bigint;
    token0Balance: bigint;
    token1Balance: bigint;
}[];
interface GetAccountPosition {
    vaultId: string;
    accountBalance: bigint;
    totalSupply: bigint;
    vaultReserves: {
        reserve0: bigint;
        reserve1: bigint;
    };
}
declare function getAccountPosition({ vaultId, accountBalance, totalSupply, vaultReserves, }: GetAccountPosition): Promise<{
    id: string;
    address: `0x${string}`;
    chainId: sushi.ChainId;
    steerTokenSupply: bigint;
    steerTokenBalance: bigint;
    token0Balance: bigint;
    token1Balance: bigint;
} | undefined>;

export { STEER_PERIPHERY_ADDRESS, STEER_SUPPORTED_CHAIN_IDS, SteerChainId, SteerChainIds, getAccountPosition, getAccountPositions, getBalanceOf, getBalanceOfs, getBalanceOfsContracts, getBalanceOfsSelect, getSteerVaultAprTimeseries, getStrategiesPayloads, getStrategyPayload, getTokenRatios, getTotalSupplies, getTotalSuppliesContracts, getTotalSuppliesSelect, getTotalSupply, getVaultAprs, getVaultMaxTickChange, getVaultPositions, getVaultPositionsContracts, getVaultReserves, getVaultsAprTimeseries, getVaultsAprs, getVaultsMaxTickChanges, getVaultsMaxTickChangesSelect, getVaultsPositionSelect, getVaultsPositions, getVaultsReserves, getVaultsReservesContracts, getVaultsReservesSelect, isSteerChainId };
