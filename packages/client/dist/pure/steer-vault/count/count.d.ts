import { type getSteerVaultCountFromDB } from '../../../api/steer-vault/count';
import { type GetApiInputFromOutput } from '../../../types';
import { type SteerVaultCountApiSchema } from './schema';
export { type SteerVaultCountApiSchema };
export type SteerVaultCount = Awaited<ReturnType<typeof getSteerVaultCountFromDB>>;
export type GetSteerVaultCountArgs = GetApiInputFromOutput<(typeof SteerVaultCountApiSchema)['_input'], (typeof SteerVaultCountApiSchema)['_output']> | undefined;
export declare const getSteerVaultCountUrl: (args: GetSteerVaultCountArgs) => string;
export declare const getSteerVaultCount: (args: GetSteerVaultCountArgs) => Promise<SteerVaultCount>;
//# sourceMappingURL=count.d.ts.map