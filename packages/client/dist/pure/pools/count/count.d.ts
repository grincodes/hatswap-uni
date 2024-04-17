import { type getPoolCountFromDB } from '../../../api/pools/count';
import { type GetApiInputFromOutput } from '../../../types';
import { type PoolCountApiSchema } from './schema';
export { type PoolCountApiSchema };
export type PoolCount = Awaited<ReturnType<typeof getPoolCountFromDB>>;
export type GetPoolCountArgs = GetApiInputFromOutput<(typeof PoolCountApiSchema)['_input'], (typeof PoolCountApiSchema)['_output']> | undefined;
export declare const getPoolCountUrl: (args: GetPoolCountArgs) => string;
export declare const getPoolCount: (args: GetPoolCountArgs) => Promise<PoolCount>;
//# sourceMappingURL=count.d.ts.map