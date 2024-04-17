import type { Prisma } from '@sushiswap/database';
import { type SteerVaultCountApiSchema } from '../../pure/steer-vault/count/schema';
import { type SteerVaultsApiSchema } from '../../pure/steer-vault/vaults/schema';
export declare function parseSteerArgs(args: typeof SteerVaultsApiSchema._output | typeof SteerVaultCountApiSchema._output): Prisma.SteerVaultWhereInput;
//# sourceMappingURL=parse.d.ts.map