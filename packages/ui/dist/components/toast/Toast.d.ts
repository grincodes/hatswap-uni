import { PromiseNotification, ResolvedNotification } from '@sushiswap/dexie';
import { ToastOptions } from 'react-toastify';
export declare const TOAST_OPTIONS: ToastOptions;
export declare const createToast: (props: PromiseNotification) => Promise<void>;
export declare const createErrorToast: (message: string | undefined, code: boolean) => void;
export declare const createSuccessToast: (props: ResolvedNotification) => Promise<void>;
export declare const createFailedToast: (props: ResolvedNotification) => Promise<void>;
export declare const createInfoToast: (props: ResolvedNotification) => Promise<void>;
//# sourceMappingURL=Toast.d.ts.map