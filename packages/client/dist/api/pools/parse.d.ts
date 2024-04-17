import { type Prisma } from '@sushiswap/database';
import { type PoolCountApiSchema } from '../../pure/pools/count/schema';
import { type PoolsApiSchema } from '../../pure/pools/pools/schema';
export declare function parsePoolArgs(args: typeof PoolsApiSchema._output | typeof PoolCountApiSchema._output): Prisma.SushiPoolWhereInput;
//# sourceMappingURL=parse.d.ts.map