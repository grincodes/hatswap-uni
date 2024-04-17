import { db } from '../db.js';
import {} from './types.js';
export const saveTokens = async ({ tokens }) => {
    try {
        await db.tokens.bulkPut(tokens);
    }
    catch (error) {
        console.error(error);
    }
};
//# sourceMappingURL=saveToken.js.map