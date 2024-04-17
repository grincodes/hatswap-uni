import { type ChainId } from 'sushi/chain';
import { type SavedToken } from './types.js';
export declare const getToken: ({ chainId, address, }: {
    chainId: ChainId | undefined;
    address: string | undefined | null;
}) => Promise<SavedToken | undefined>;
//# sourceMappingURL=getToken.d.ts.map