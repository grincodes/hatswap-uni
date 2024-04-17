import { ResolvedNotification } from '@sushiswap/dexie';
import { FC } from 'react';
interface ToastCompleted extends ResolvedNotification {
    onDismiss(): void;
}
export declare const ToastCompleted: FC<ToastCompleted>;
export {};
//# sourceMappingURL=ToastCompleted.d.ts.map