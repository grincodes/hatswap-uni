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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { XMarkIcon } from '@heroicons/react/24/solid';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import classNames from 'classnames';
import { IconButton } from './iconbutton';
const Sheet = SheetPrimitive.Root;
const SheetClose = SheetPrimitive.Close;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SheetPrimitive.Portal, Object.assign({ className: classNames(className) }, props)));
};
SheetPortal.displayName = SheetPrimitive.Portal.displayName;
const SheetOverlay = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SheetPrimitive.Overlay, Object.assign({ className: classNames('fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', className) }, props, { ref: ref })));
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva('border rounded-2xl fixed z-50 gap-4 paper border-accent bg-gray-100/80 dark:bg-slate-900/80 p-6 shadow-xl transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500', {
    variants: {
        side: {
            top: 'inset-x-0 top-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
            bottom: 'inset-x-0 bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
            left: 'inset-y-0 left-0 h-full w-3/4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
            right: 'inset-y-2 right-2 h-[calc(100%-16px)] w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
        },
    },
    defaultVariants: {
        side: 'right',
    },
});
const SheetContent = React.forwardRef((_a, ref) => {
    var { side = 'right', className, children } = _a, props = __rest(_a, ["side", "className", "children"]);
    return (_jsxs(SheetPortal, { children: [_jsx(SheetOverlay, {}), _jsxs(SheetPrimitive.Content, Object.assign({ ref: ref, className: classNames(sheetVariants({ side }), className) }, props, { children: [children, _jsx(SheetPrimitive.Close, { asChild: true, className: "absolute right-4 top-4", children: _jsx(IconButton, { icon: XMarkIcon, name: "Close" }) })] }))] }));
});
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: classNames('flex flex-col space-y-2 text-center sm:text-left', className) }, props)));
};
SheetHeader.displayName = 'SheetHeader';
const SheetFooter = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: classNames('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className) }, props)));
};
SheetFooter.displayName = 'SheetFooter';
const SheetTitle = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SheetPrimitive.Title, Object.assign({ ref: ref, className: classNames('text-lg font-semibold text-foreground', className) }, props)));
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SheetPrimitive.Description, Object.assign({ ref: ref, className: classNames('text-sm text-muted-foreground', className) }, props)));
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;
export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, };
//# sourceMappingURL=sheet.js.map