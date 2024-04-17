import { type getPoolFromDB } from '../../../api/pools/pool';
import { type GetApiInputFromOutput } from '../../../types';
import { type PoolApiSchema } from './schema';
export { type PoolApiSchema };
export type Pool = Awaited<ReturnType<typeof getPoolFromDB>>;
export type GetPoolArgs = GetApiInputFromOutput<(typeof PoolApiSchema)['_input'], (typeof PoolApiSchema)['_output']> | string;
export declare const getPoolUrl: (args: GetPoolArgs) => string;
export declare const getPool: (args: GetPoolArgs) => Promise<Pool>;
//# sourceMappingURL=pool.d.ts.map