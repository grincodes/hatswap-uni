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
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as React from 'react';
import classNames from 'classnames';
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef((_a, ref) => {
    var { className, sideOffset = 4 } = _a, props = __rest(_a, ["className", "sideOffset"]);
    return (_jsx(TooltipPrimitive.Portal, { children: _jsx(TooltipPrimitive.Content, Object.assign({ ref: ref, sideOffset: sideOffset, className: classNames('border border-accent text-gray-900 font-medium dark:text-slate-400 z-50 overflow-hidden rounded-xl paper bg-white/50 dark:bg-slate-950 px-3 py-1.5 text-xs shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1', className) }, props)) }));
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
export { Tooltip, TooltipContent, TooltipPrimitive, TooltipProvider, TooltipTrigger, };
//# sourceMappingURL=tooltip.js.map