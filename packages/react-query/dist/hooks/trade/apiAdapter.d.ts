import { type Type } from 'sushi/currency';
import z from 'zod';
import type { tradeValidator01 } from './validator01';
import type { tradeValidator02 } from './validator02';
export type swapApi1 = z.infer<typeof tradeValidator01>;
export type swapApi2 = z.infer<typeof tradeValidator02>;
export declare function apiAdapter02To01(res: swapApi2, fromToken: Type, toToken: Type, to: string | undefined): swapApi1;
//# sourceMappingURL=apiAdapter.d.ts.map