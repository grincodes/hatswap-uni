import { type BondsPositionsApiSchema } from '../../../pure/bonds/positions/schema';
export declare function getBondPositionsFromSubgraph(args: typeof BondsPositionsApiSchema._output): Promise<{
    owner: `0x${string}`;
    chainId: 1 | 42161 | 10 | 137;
    balance: string;
    balanceUSD: number;
    maturity: number;
    tellerAddress: string;
    bondTokenId: string;
    payoutToken: {
        decimals: number;
        priceUSD: number;
        symbol: string;
        address: `0x${string}`;
        name: string;
        id: string;
        chainId: 1 | 42161 | 10 | 137;
    };
}[]>;
//# sourceMappingURL=index.d.ts.map