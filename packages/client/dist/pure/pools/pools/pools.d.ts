import { type getPoolsFromDB } from '../../../api/pools/pools';
import { type GetApiInputFromOutput } from '../../../types';
import { type PoolsApiSchema } from './schema';
export { type PoolsApiSchema };
export type Pools = Awaited<ReturnType<typeof getPoolsFromDB>>;
export type GetPoolsArgs = GetApiInputFromOutput<(typeof PoolsApiSchema)['_input'], (typeof PoolsApiSchema)['_output']> | undefined;
export declare const getPoolsUrl: (args: GetPoolsArgs) => string;
export declare const getPools: (args: GetPoolsArgs) => Promise<Pools>;
//# sourceMappingURL=pools.d.ts.map