import { type getBondsFromSubgraph } from '../../../api/bonds/bonds/';
import { type GetApiInputFromOutput } from '../../../types';
import { type BondsApiSchema } from './schema';
export { type BondsApiSchema };
export type Bonds = Awaited<ReturnType<typeof getBondsFromSubgraph>>;
export type GetBondsArgs = GetApiInputFromOutput<(typeof BondsApiSchema)['_input'], (typeof BondsApiSchema)['_output']> | undefined;
export declare const getBondsUrl: (args?: GetBondsArgs) => string;
export declare const getBonds: (args?: GetBondsArgs) => Promise<Bonds>;
//# sourceMappingURL=bonds.d.ts.map