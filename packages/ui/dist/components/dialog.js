'use client';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { XMarkIcon } from '@heroicons/react/24/solid';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import { createContext, useCallback, useContext, useMemo, useState, } from 'react';
import { Chain } from 'sushi/chain';
import { Button, Dots, IconButton, LinkInternal, Loader, classNames, } from '../index';
import { CheckMarkIcon } from './icons/CheckmarkIcon';
import { FailedMarkIcon } from './icons/FailedMarkIcon';
const dialogVariants = cva('duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', {
    variants: {
        variant: {
            default: 'rounded-b-none md:rounded-b-2xl bottom-0 md:bottom-[unset] fixed left-[50%] md:top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] md:translate-y-[-50%] gap-4 bg-gray-100 dark:bg-slate-800 p-6 shadow-lg rounded-2xl md:w-full data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-bottom-[48%] md:data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-bottom-[48%] md:data-[state=open]:slide-in-from-top-[48%]',
            opaque: 'px-4 fixed z-50 top-4 grid w-full max-w-xl',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
const dialogOverlayVariants = cva('fixed inset-0 z-50 transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in', {
    variants: {
        variant: {
            default: 'bg-black/10 backdrop-blur-sm',
            opaque: 'bg-gray-100 dark:bg-slate-900',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
const dialogCloseVariants = cva('', {
    variants: {
        variant: {
            default: 'absolute top-6 right-6',
            opaque: 'hidden',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const DialogPortal = (_a) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx(DialogPrimitive.Portal, Object.assign({ className: classNames(className) }, props, { children: _jsx("div", { className: "fixed inset-0 z-50 flex items-start justify-center sm:items-center", children: children }) })));
};
DialogPortal.displayName = DialogPrimitive.Portal.displayName;
const DialogOverlay = React.forwardRef((_a, ref) => {
    var { className, variant } = _a, props = __rest(_a, ["className", "variant"]);
    return (_jsx(DialogPrimitive.Overlay, Object.assign({ ref: ref, className: dialogOverlayVariants({ variant, className }) }, props)));
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef((_a, ref) => {
    var { className, hideClose: _hideClose = false, variant, children } = _a, props = __rest(_a, ["className", "hideClose", "variant", "children"]);
    return (_jsxs(DialogPortal, { children: [_jsx(DialogOverlay, { variant: variant }), _jsxs(DialogPrimitive.Content, Object.assign({ ref: ref, className: dialogVariants({ variant, className }) }, props, { children: [children, _jsx(DialogPrimitive.Close, { asChild: true, className: dialogCloseVariants({ variant }), children: _jsx(IconButton, { icon: XMarkIcon, name: "Close" }) })] }))] }));
});
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: classNames('flex flex-col space-y-1.5 text-center sm:text-left', className) }, props)));
};
DialogHeader.displayName = 'DialogHeader';
const DialogFooter = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: classNames('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className) }, props)));
};
DialogFooter.displayName = 'DialogFooter';
const DialogTitle = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(DialogPrimitive.Title, Object.assign({ ref: ref, className: classNames('text-lg font-semibold leading-none tracking-tight mr-[64px]', className) }, props)));
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(DialogPrimitive.Description, Object.assign({ ref: ref, className: classNames('text-sm text-muted-foreground mr-[64px]', className) }, props)));
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const DialogReview = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { confirm, open, setOpen } = useDialog(DialogType.Review);
    return (_jsx(Dialog, Object.assign({}, props, { open: open, onOpenChange: setOpen, children: children({ confirm }) })));
};
DialogReview.displayName = 'DialogReview';
const DialogCustom = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { open, setOpen } = useDialog(DialogType.Confirm);
    return (_jsx(Dialog, Object.assign({}, props, { open: open, onOpenChange: setOpen, children: children })));
};
DialogCustom.displayName = 'DialogCustom';
const DialogConfirm = (_a) => {
    var _b, _c, _d;
    var { chainId, testId, successMessage, buttonText = 'Close', buttonLink, status, txHash } = _a, props = __rest(_a, ["chainId", "testId", "successMessage", "buttonText", "buttonLink", "status", "txHash"]);
    const { open, setOpen } = useDialog(DialogType.Confirm);
    return (_jsx(Dialog, Object.assign({}, props, { open: open, onOpenChange: setOpen, children: _jsx(DialogContent, { children: _jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: status === 'loading' ? (_jsx(Dots, { children: "Confirming" })) : status === 'success' ? ('Success!') : ('Oops!') }), _jsx(DialogDescription, { className: "font-medium", children: status === 'loading' ? (_jsxs(_Fragment, { children: ["Waiting for your", ' ', _jsx("a", { target: "_blank", href: txHash ? (_b = Chain.from(chainId)) === null || _b === void 0 ? void 0 : _b.getTxUrl(txHash) : '', className: "cursor-pointer text-blue hover:underline", rel: "noreferrer", children: "transaction" }), ' ', "to be confirmed on the blockchain."] })) : status === 'success' ? (_jsx("a", { target: "_blank", href: txHash ? (_c = Chain.from(chainId)) === null || _c === void 0 ? void 0 : _c.getTxUrl(txHash) : '', className: "cursor-pointer text-blue hover:underline", rel: "noreferrer", children: successMessage })) : (_jsx("a", { target: "_blank", href: txHash ? (_d = Chain.from(chainId)) === null || _d === void 0 ? void 0 : _d.getTxUrl(txHash) : '', className: "cursor-pointer text-blue hover:underline", rel: "noreferrer", children: "Something went wrong..." })) }), _jsx("div", { className: "py-6 flex justify-center", children: status === 'loading' ? (_jsx(Loader, { size: 132, strokeWidth: 1, className: "!text-blue" })) : status === 'success' ? (_jsx(CheckMarkIcon, { width: 132, height: 132 })) : (_jsx(FailedMarkIcon, { width: 132, height: 132 })) }), _jsx(DialogFooter, { children: _jsx(DialogClose, { asChild: true, children: _jsx(Button, { testId: testId, asChild: !!buttonLink, fullWidth: true, size: "xl", children: buttonLink ? (_jsx(LinkInternal, { href: buttonLink, children: buttonText })) : (_jsx(_Fragment, { children: buttonText })) }) }) })] }) }) })));
};
DialogConfirm.displayName = 'DialogConfirm';
var DialogType;
(function (DialogType) {
    DialogType[DialogType["Review"] = 0] = "Review";
    DialogType[DialogType["Confirm"] = 1] = "Confirm";
})(DialogType || (DialogType = {}));
const DialogContext = createContext(undefined);
const DialogProvider = ({ children }) => {
    const [state, setState] = useState({
        [DialogType.Review]: false,
        [DialogType.Confirm]: false,
    });
    const confirm = useCallback(() => {
        setState({
            [DialogType.Review]: false,
            [DialogType.Confirm]: true,
        });
    }, []);
    return (_jsx(DialogContext.Provider, { value: { state, confirm, setState }, children: children }));
};
const useDialog = (type) => {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error('Hook can only be used inside Modal Context');
    }
    const { state, setState, confirm } = context;
    return useMemo(() => {
        if (type === DialogType.Review) {
            return {
                open: Boolean(state[type]),
                setOpen: (val) => setState((prev) => (Object.assign(Object.assign({}, prev), { [DialogType.Review]: val }))),
                confirm,
            };
        }
        else {
            return {
                open: Boolean(state[type]),
                setOpen: (val) => setState((prev) => (Object.assign(Object.assign({}, prev), { [DialogType.Confirm]: val }))),
            };
        }
    }, [state, setState, confirm, type]);
};
export { Dialog, DialogClose, DialogConfirm, DialogContent, DialogCustom, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPrimitive, DialogProvider, DialogReview, DialogTitle, DialogTrigger, DialogType, useDialog, };
//# sourceMappingURL=dialog.js.map