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
import { jsx as _jsx } from "react/jsx-runtime";
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';
import classNames from 'classnames';
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef((_a, ref) => {
    var { children, className = '', align = 'center', collisionPadding = 8, sideOffset = 8 } = _a, props = __rest(_a, ["children", "className", "align", "collisionPadding", "sideOffset"]);
    return (_jsx(PopoverPrimitive.Portal, { children: _jsx(PopoverPrimitive.Content, Object.assign({ ref: ref, align: align, collisionPadding: collisionPadding, sideOffset: sideOffset, className: classNames(className, 'border border-accent max-h-[var(--radix-popper-available-height)] z-50 w-72 rounded-md bg-white/50 dark:bg-slate-800/50 paper rounded-xl p-4 shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2') }, props, { children: children })) }));
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
export { Popover, PopoverContent, PopoverPrimitive, PopoverTrigger };
//# sourceMappingURL=popover.js.map