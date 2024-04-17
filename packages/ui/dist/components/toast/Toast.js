import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createNotification, } from '@sushiswap/dexie';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { ToastButtons } from './ToastButtons';
import { ToastCompleted } from './ToastCompleted';
import { ToastContent } from './ToastContent';
import { ToastFailed } from './ToastFailed';
import { ToastInfo } from './ToastInfo';
import { ToastPending } from './ToastPending';
export const TOAST_OPTIONS = {
    position: 'top-right',
    autoClose: false,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    closeButton: false,
    icon: false,
};
export const createToast = (props) => {
    const onDismiss = () => toast.dismiss(props.txHash);
    // Spawn new toasts based on promise result
    props.promise
        .then(() => {
        setTimeout(onDismiss, 3000);
        // Spawn success notification
        const toastId = `completed:${props.txHash}`;
        toast(_jsx(ToastCompleted, Object.assign({}, props, { summary: props.summary.completed, onDismiss: () => toast.dismiss(toastId) })), Object.assign(Object.assign({}, TOAST_OPTIONS), { toastId, autoClose: 5000 }));
    })
        .catch((e) => {
        console.error(e);
        setTimeout(onDismiss, 3000);
        // Spawn error notification
        const toastId = `failed:${props.txHash}`;
        toast(_jsx(ToastFailed, Object.assign({}, props, { summary: props.summary.failed, onDismiss: () => toast.dismiss(toastId) })), Object.assign(Object.assign({}, TOAST_OPTIONS), { toastId }));
    });
    toast(_jsx(ToastPending, Object.assign({}, props, { summary: props.summary.pending, onDismiss: onDismiss })), Object.assign(Object.assign({}, TOAST_OPTIONS), { toastId: props.txHash }));
    return createNotification(props);
};
export const createErrorToast = (message, code) => {
    if (!message)
        return;
    const toastId = `failed:${nanoid()}`;
    toast(_jsxs(_Fragment, { children: [_jsx(ToastContent, { summary: message, code: code }), _jsx(ToastButtons, { onDismiss: () => toast.dismiss(toastId) })] }), Object.assign(Object.assign({}, TOAST_OPTIONS), { toastId }));
};
export const createSuccessToast = (props) => {
    const toastId = `completed:${props.txHash}`;
    toast(_jsx(ToastCompleted, Object.assign({}, props, { onDismiss: () => toast.dismiss(toastId) })), Object.assign(Object.assign({}, TOAST_OPTIONS), { toastId, autoClose: 5000 }));
    return createNotification(props);
};
export const createFailedToast = (props) => {
    const toastId = `failed:${props.txHash}`;
    toast(_jsx(ToastFailed, Object.assign({}, props, { onDismiss: () => toast.dismiss(toastId) })), Object.assign(Object.assign({}, TOAST_OPTIONS), { toastId, autoClose: 5000 }));
    return createNotification(props);
};
export const createInfoToast = (props) => {
    const toastId = `info:${props.txHash}`;
    toast(_jsx(ToastInfo, Object.assign({}, props, { onDismiss: () => toast.dismiss(toastId) })), Object.assign(Object.assign({}, TOAST_OPTIONS), { toastId, autoClose: 5000 }));
    return createNotification(props);
};
//# sourceMappingURL=Toast.js.map