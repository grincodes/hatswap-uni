import {} from 'sushi/chain';
import { db } from '../db.js';
import {} from './types.js';
export const getToken = async ({ chainId, address, }) => {
    if (!chainId || typeof address !== 'string')
        return;
    try {
        const token = await db.tokens
            .where('id')
            .equals(`${chainId}:${address.toLowerCase()}`)
            .first();
        return token;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
};
//# sourceMappingURL=getToken.js.map