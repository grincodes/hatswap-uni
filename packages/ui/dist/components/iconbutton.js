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
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import { buttonIconVariants } from './button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from './tooltip';
const iconButtonVariants = cva('rounded-full cursor-pointer whitespace-nowrap inline-flex gap-2 items-center justify-center font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-blue', {
    variants: {
        variant: {
            default: 'bg-blue hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-600 text-white',
            destructive: 'bg-red hover:bg-red-600 focus:bg-red-700 active:bg-red-600 text-white',
            warning: 'bg-amber-400 hover:bg-amber-500 focus:bg-amber-600 active:bg-amber-500 text-amber-900',
            outline: 'border dark:border-slate-200/5 border-gray-900/5 hover:bg-muted focus:bg-accent',
            secondary: 'bg-secondary hover:bg-muted focus:bg-accent',
            ghost: 'hover:bg-secondary focus:bg-accent',
            link: 'text-blue hover:text-blue-700 font-semibold !p-0 !h-[unset] !min-h-[unset]',
        },
        size: {
            xs: 'min-h-[26px] h-[26px] min-w-[26px] w-[26px] text-xs',
            sm: 'min-h-[36px] h-[36px] min-w-[36px] w-[36px] text-sm',
            default: 'min-h-[40px] h-[40px] min-w-[40px] w-[40px] text-sm',
            lg: 'min-h-[44px] h-[44px] min-w-[44px] w-[44px',
            xl: 'min-h-[52px] h-[52px] min-w-[52px] w-[52px]',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});
const IconButton = React.forwardRef((_a, ref) => {
    var { className, children, asChild, icon: Icon, iconProps, description, size, variant = 'secondary', name: _name } = _a, props = __rest(_a, ["className", "children", "asChild", "icon", "iconProps", "description", "size", "variant", "name"]);
    const Comp = asChild ? Slot : 'span';
    const button = (_jsxs(Comp, Object.assign({ role: "button", className: iconButtonVariants({ variant, size, className }), ref: ref }, props, { children: [typeof Icon === 'string' ? (_jsx("span", { className: buttonIconVariants({
                    size,
                    className: iconProps === null || iconProps === void 0 ? void 0 : iconProps.className,
                }), children: Icon })) : (_jsx(Icon, Object.assign({}, iconProps, { className: buttonIconVariants({
                    size,
                    className: iconProps === null || iconProps === void 0 ? void 0 : iconProps.className,
                }) }))), children ? children : null] })));
    if (description) {
        return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: button }), _jsx(TooltipContent, { side: "bottom", children: _jsx("p", { children: description }) })] }) }));
    }
    return button;
});
IconButton.displayName = 'ButtonNew';
export { IconButton, iconButtonVariants };
//# sourceMappingURL=iconbutton.js.map