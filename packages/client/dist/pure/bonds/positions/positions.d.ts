import { type getBondPositionsFromSubgraph } from '../../../api';
import { type GetApiInputFromOutput } from '../../../types';
import { type BondsPositionsApiSchema } from './schema';
export { type BondsPositionsApiSchema };
export type BondPosition = BondsPositions[number];
export type BondsPositions = Awaited<ReturnType<typeof getBondPositionsFromSubgraph>>;
export type GetBondsPositionsArgs = GetApiInputFromOutput<(typeof BondsPositionsApiSchema)['_input'], (typeof BondsPositionsApiSchema)['_output']> | undefined;
export declare const getBondsPositionsUrl: (args?: GetBondsPositionsArgs) => string;
export declare const getBondsPositions: (args?: GetBondsPositionsArgs) => Promise<BondsPositions>;
//# sourceMappingURL=positions.d.ts.map