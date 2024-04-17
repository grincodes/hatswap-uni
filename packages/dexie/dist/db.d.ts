import { Dexie, type Table } from 'dexie';
import { type ResolvedNotification } from './notifications/index.js';
import { type SavedToken } from './tokens/index.js';
export declare class SushiswapDexie extends Dexie {
    notifications: Table<ResolvedNotification & {
        account: string;
    }>;
    tokens: Table<SavedToken>;
    constructor();
}
export declare const db: SushiswapDexie;
//# sourceMappingURL=db.d.ts.map