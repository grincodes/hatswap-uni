"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tridentGetPoolsAbi = void 0;
exports.tridentGetPoolsAbi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'token0',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'token1',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'startIndex',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'count',
                type: 'uint256',
            },
        ],
        name: 'getPools',
        outputs: [
            {
                internalType: 'address[]',
                name: 'pairPools',
                type: 'address[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
//# sourceMappingURL=tridentGetPoolsAbi.js.map