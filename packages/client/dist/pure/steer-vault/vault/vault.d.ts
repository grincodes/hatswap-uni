import { type getSteerVaultFromDB } from '../../../api/steer-vault/vault';
import { type GetApiInputFromOutput } from '../../../types';
import { type SteerVaultApiSchema } from './schema';
export { type SteerVaultApiSchema };
export type SteerVault = Awaited<ReturnType<typeof getSteerVaultFromDB>>;
export type GetSteerVaultArgs = GetApiInputFromOutput<(typeof SteerVaultApiSchema)['_input'], (typeof SteerVaultApiSchema)['_output']> | string;
export declare const getSteerVaultUrl: (args: GetSteerVaultArgs) => string;
export declare const getSteerVault: (args: GetSteerVaultArgs) => Promise<SteerVault>;
//# sourceMappingURL=vault.d.ts.map