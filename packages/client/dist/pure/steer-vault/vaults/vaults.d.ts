import { type getSteerVaultsFromDB } from '../../../api/steer-vault/vaults';
import { type GetApiInputFromOutput } from '../../../types';
import { type SteerVaultsApiSchema } from './schema';
export { type SteerVaultsApiSchema };
export type SteerVaults = Awaited<ReturnType<typeof getSteerVaultsFromDB>>;
export type GetSteerVaultsArgs = GetApiInputFromOutput<(typeof SteerVaultsApiSchema)['_input'], (typeof SteerVaultsApiSchema)['_output']> | undefined;
export declare const getSteerVaultsUrl: (args: GetSteerVaultsArgs) => string;
export declare const getSteerVaults: (args: GetSteerVaultsArgs) => Promise<SteerVaults>;
//# sourceMappingURL=vaults.d.ts.map