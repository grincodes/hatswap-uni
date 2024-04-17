import { Dexie } from 'dexie';
import {} from './notifications/index.js';
import {} from './tokens/index.js';
export class SushiswapDexie extends Dexie {
    notifications;
    tokens;
    constructor() {
        super('sushi');
        this.version(1).stores({
            notifications: '++id, account, chainId, href, txHash, summary, type, timestamp, groupTimestamp',
            tokens: 'id, address, chainId, decimals, name, symbol, status',
        });
    }
}
export const db = new SushiswapDexie();
//# sourceMappingURL=db.js.map