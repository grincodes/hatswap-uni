import type { MarketId } from '@sushiswap/bonds-sdk';
import { type getBondFromSubgraph } from '../../../api/bonds/bond';
import { type BondApiSchema } from './schema';
export { type BondApiSchema };
export type Bond = NonNullable<Awaited<ReturnType<typeof getBondFromSubgraph>>>;
export type GetBondArgs = {
    marketId: MarketId;
};
export declare const getBondUrl: (args: GetBondArgs) => string;
export declare const getBond: (args: GetBondArgs) => Promise<Bond>;
//# sourceMappingURL=bond.d.ts.map