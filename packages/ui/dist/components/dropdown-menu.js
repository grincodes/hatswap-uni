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
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import * as React from 'react';
import classNames from 'classnames';
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuSubTrigger = React.forwardRef((_a, ref) => {
    var { className, inset, children } = _a, props = __rest(_a, ["className", "inset", "children"]);
    return (_jsxs(DropdownMenuPrimitive.SubTrigger, Object.assign({ ref: ref, className: classNames('flex cursor-default select-none items-center rounded-lg px-3 py-2 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent', inset && 'pl-8', className) }, props, { children: [children, _jsx(ChevronRight, { className: "ml-auto h-4 w-4" })] })));
});
DropdownMenuSubTrigger.displayName =
    DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(DropdownMenuPrimitive.SubContent, Object.assign({ ref: ref, className: classNames('border border-accent p-1 z-50 min-w-[8rem] rounded-xl text-popover-foreground bg-white/50 paper dark:bg-slate-800/50 shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1', className) }, props)));
});
DropdownMenuSubContent.displayName =
    DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef((_a, ref) => {
    var { className, sideOffset = 8, collisionPadding = 8 } = _a, props = __rest(_a, ["className", "sideOffset", "collisionPadding"]);
    return (_jsx(DropdownMenuPrimitive.Portal, { children: _jsx(DropdownMenuPrimitive.Content, Object.assign({ ref: ref, sideOffset: sideOffset, collisionPadding: collisionPadding, className: classNames('border border-accent p-1 relative z-50 min-w-[8rem] rounded-xl overflow-hidden bg-white/50 paper dark:bg-slate-800/50 border-gray-900/5 dark:border-slate-200/5 shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className) }, props)) }));
});
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef((_a, ref) => {
    var { className, inset, disabled } = _a, props = __rest(_a, ["className", "inset", "disabled"]);
    return (_jsx(DropdownMenuPrimitive.Item, Object.assign({ ref: ref, disabled: disabled, className: classNames(disabled ? '' : 'cursor-pointer', 'hover:bg-secondary focus:bg-muted relative flex select-none items-center rounded-lg px-3 py-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', inset && 'pl-8', className) }, props)));
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef((_a, ref) => {
    var { className, children, checked } = _a, props = __rest(_a, ["className", "children", "checked"]);
    return (_jsxs(DropdownMenuPrimitive.CheckboxItem, Object.assign({ ref: ref, className: classNames('hover:bg-secondary cursor-pointer rounded-lg relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className), checked: checked }, props, { children: [_jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: _jsx(DropdownMenuPrimitive.ItemIndicator, { children: _jsx(Check, { className: "h-4 w-4" }) }) }), children] })));
});
DropdownMenuCheckboxItem.displayName =
    DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsxs(DropdownMenuPrimitive.RadioItem, Object.assign({ ref: ref, className: classNames('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className) }, props, { children: [_jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: _jsx(DropdownMenuPrimitive.ItemIndicator, { children: _jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }), children] })));
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return (_jsx(DropdownMenuPrimitive.Label, Object.assign({ ref: ref, className: classNames('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className) }, props)));
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuGroupLabel = React.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return (_jsx(DropdownMenuPrimitive.Label, Object.assign({ ref: ref, className: classNames('px-2 py-1.5 text-xs text-muted-foreground', inset && 'pl-8', className) }, props)));
});
DropdownMenuGroupLabel.displayName = 'DropdownMenuGroupLabel';
const DropdownMenuSeparator = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(DropdownMenuPrimitive.Separator, Object.assign({ ref: ref, className: classNames('-mx-1 my-1 h-px bg-gray-900/5 dark:bg-slate-200/5', className) }, props)));
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const DropdownMenuShortcut = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("span", Object.assign({ className: classNames('ml-auto text-xs tracking-widest opacity-60', className) }, props)));
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
export { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuGroupLabel, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, };
//# sourceMappingURL=dropdown-menu.js.map