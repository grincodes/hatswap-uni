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
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import * as SelectPrimitive from '@radix-ui/react-select';
import classNames from 'classnames';
import * as React from 'react';
import { textFieldVariants } from './text-field';
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
const SelectIcon = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SelectPrimitive.Icon, Object.assign({ ref: ref }, props, { asChild: true, children: _jsx(ChevronDownIcon, { strokeWidth: 2, width: 16, height: 16, className: classNames(className, 'w-4 h-4') }) })));
});
SelectIcon.displayName = SelectPrimitive.Icon.displayName;
const SelectTrigger = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    const content = props.asChild ? (children) : (_jsxs("div", { className: "flex gap-2 items-center", children: [children, _jsx(SelectIcon, {})] }));
    return (_jsx(_Fragment, { children: _jsx(SelectPrimitive.Trigger, Object.assign({ ref: ref, className: textFieldVariants({
                className: classNames(className, 'flex justify-between items-center'),
            }) }, props, { children: content })) }));
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectContent = React.forwardRef((_a, ref) => {
    var { className, children, collisionPadding = 8, sideOffset = 4, position = 'popper' } = _a, props = __rest(_a, ["className", "children", "collisionPadding", "sideOffset", "position"]);
    return (_jsx(SelectPrimitive.Portal, { children: _jsxs(SelectPrimitive.Content, Object.assign({ ref: ref, collisionPadding: collisionPadding, sideOffset: sideOffset, className: classNames('max-h-[--radix-select-content-available-height] p-0.5 relative z-50 min-w-[8rem] rounded-xl overflow-hidden bg-white/50 paper dark:bg-slate-800/50 shadow-md animate-in fade-in-80', position === 'popper' && 'translate-y-1 ', className), position: position }, props, { children: [_jsx(SelectPrimitive.ScrollUpButton, { children: "Test" }), _jsx(SelectPrimitive.Viewport, { className: classNames('p-1', position === 'popper' &&
                        'h-[var(--radix-select-trigger-height)]  min-w-[var(--radix-select-trigger-width)]'), children: children }), _jsx(SelectPrimitive.ScrollDownButton, { children: "Test" })] })) }));
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsxs(_Fragment, { children: [_jsx("input", { value: props['aria-label'], placeholder: "hidden placeholder", className: "hidden peer" }), _jsx(SelectPrimitive.Label, Object.assign({ ref: ref, className: classNames('py-1.5 pl-8 pr-2 text-sm font-semibold', className) }, props))] }));
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsxs(SelectPrimitive.Item, Object.assign({ ref: ref, className: classNames('text-gray-700 dark:text-slate-300 relative flex w-full cursor-default select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none hover:bg-secondary focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className) }, props, { children: [_jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: _jsx(SelectPrimitive.ItemIndicator, { children: _jsx(CheckIcon, { strokeWidth: 3, width: 16, height: 16, className: "text-blue" }) }) }), _jsx(SelectPrimitive.ItemText, { children: children })] })));
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SelectPrimitive.Separator, Object.assign({ ref: ref, className: classNames('-mx-1 my-1 h-px bg-muted', className) }, props)));
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const SelectCaption = ({ children, isError, }) => {
    if (!children)
        return _jsx(_Fragment, {});
    return (_jsx("span", { className: classNames(isError ? 'text-red' : '', 'mt-1.5 inline-block px-3 text-sm text-gray-500'), children: children }));
};
export { Select, SelectCaption, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, SelectPrimitive, };
//# sourceMappingURL=select.js.map