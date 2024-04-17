"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sushiXSwap2Abi = void 0;
exports.sushiXSwap2Abi = [
    {
        inputs: [
            {
                internalType: 'contract IRouteProcessor',
                name: '_rp',
                type: 'address',
            },
            { internalType: 'address', name: '_weth', type: 'address' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    { inputs: [], name: 'IncorrectoAmountIn', type: 'error' },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'bytes2', name: 'refId', type: 'bytes2' },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'adapter',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'tokenIn',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256',
            },
            { indexed: false, internalType: 'address', name: 'to', type: 'address' },
        ],
        name: 'SushiXSwapOnSrc',
        type: 'event',
    },
    {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'approvedAdapters',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    { internalType: 'bytes2', name: 'refId', type: 'bytes2' },
                    { internalType: 'address', name: 'adapter', type: 'address' },
                    { internalType: 'address', name: 'tokenIn', type: 'address' },
                    { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
                    { internalType: 'address', name: 'to', type: 'address' },
                    { internalType: 'bytes', name: 'adapterData', type: 'bytes' },
                ],
                internalType: 'struct ISushiXSwapV2.BridgeParams',
                name: '_bridgeParams',
                type: 'tuple',
            },
            { internalType: 'address', name: '_refundAddress', type: 'address' },
            { internalType: 'bytes', name: '_swapPayload', type: 'bytes' },
            { internalType: 'bytes', name: '_payloadData', type: 'bytes' },
        ],
        name: 'bridge',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'bytes[]', name: 'data', type: 'bytes[]' }],
        name: 'multicall',
        outputs: [{ internalType: 'bytes[]', name: 'results', type: 'bytes[]' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'pause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '_token', type: 'address' },
            { internalType: 'address', name: '_to', type: 'address' },
        ],
        name: 'rescueTokens',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'resume',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'rp',
        outputs: [
            { internalType: 'contract IRouteProcessor', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '_adapter', type: 'address' },
            { internalType: 'bytes', name: '_adapterData', type: 'bytes' },
        ],
        name: 'sendMessage',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'user', type: 'address' },
            { internalType: 'bool', name: 'privileged', type: 'bool' },
        ],
        name: 'setPrivileged',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'bytes', name: '_swapData', type: 'bytes' }],
        name: 'swap',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    { internalType: 'bytes2', name: 'refId', type: 'bytes2' },
                    { internalType: 'address', name: 'adapter', type: 'address' },
                    { internalType: 'address', name: 'tokenIn', type: 'address' },
                    { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
                    { internalType: 'address', name: 'to', type: 'address' },
                    { internalType: 'bytes', name: 'adapterData', type: 'bytes' },
                ],
                internalType: 'struct ISushiXSwapV2.BridgeParams',
                name: '_bridgeParams',
                type: 'tuple',
            },
            { internalType: 'address', name: '_refundAddress', type: 'address' },
            { internalType: 'bytes', name: '_swapData', type: 'bytes' },
            { internalType: 'bytes', name: '_swapPayload', type: 'bytes' },
            { internalType: 'bytes', name: '_payloadData', type: 'bytes' },
        ],
        name: 'swapAndBridge',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '_adapter', type: 'address' },
            { internalType: 'bool', name: '_status', type: 'bool' },
        ],
        name: 'updateAdapterStatus',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'newRouteProcessor', type: 'address' },
        ],
        name: 'updateRouteProcessor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'weth',
        outputs: [{ internalType: 'contract IWETH', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
];
//# sourceMappingURL=sushiXSwap2Abi.js.map