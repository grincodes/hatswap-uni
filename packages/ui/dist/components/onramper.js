'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Slot } from '@radix-ui/react-slot';
import { createContext, useCallback, useContext, useState, } from 'react';
import classNames from 'classnames';
import { Dialog, DialogOverlay, DialogPrimitive } from './dialog';
import { IconButton } from './iconbutton';
export const OnramperButton = ({ children, className }) => {
    const { setOpen } = useOnramperContext();
    const onClick = useCallback(() => {
        setOpen(true);
    }, [setOpen]);
    return (_jsx(Slot, { onClick: onClick, className: className, children: children }));
};
export const OnramperPanel = ({ address }) => {
    const { open, setOpen } = useOnramperContext();
    let src = 'https://buy.onramper.com?themeName=sushi&apiKey=pk_prod_01GTYEN8CHRVPKES7HK2S9JXDJ&defaultCrypto=ETH';
    if (address) {
        src += `&wallets=ETH:${address}`;
    }
    return (_jsx(Dialog, { open: open, onOpenChange: () => { }, children: _jsxs(DialogPrimitive.Portal, { children: [_jsx(DialogOverlay, {}), _jsxs(DialogPrimitive.Content, { className: classNames('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl md:w-full'), children: [_jsx("div", { className: "flex justify-end", children: _jsx(IconButton, { onClick: () => setOpen(false), icon: XMarkIcon, name: "Close" }) }), _jsx("div", { className: "flex items-center justify-center w-full h-[75vh] sm:h-[620px] rounded-t-2xl sm:rounded-2xl overflow-hidden", children: _jsx("iframe", { src: src, height: "100%", width: "100%", title: "Onramper widget", allow: "accelerometer; autoplay; camera; gyroscope; payment", sandbox: "allow-scripts allow-same-origin" }) })] })] }) }));
};
const OnramperContext = createContext(undefined);
export const OnramperProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (_jsxs(OnramperContext.Provider, { value: { open, setOpen }, children: [typeof children === 'function' ? children({ open, setOpen }) : children, _jsx(OnramperPanel, {})] }));
};
export const useOnramperContext = () => {
    const context = useContext(OnramperContext);
    if (!context) {
        throw new Error('Hook can only be used inside Onramper Context');
    }
    return context;
};
//# sourceMappingURL=onramper.js.map