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
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import * as React from 'react';
import classNames from 'classnames';
const buttonVariants = cva('cursor-pointer whitespace-nowrap inline-flex gap-2 items-center justify-center font-medium disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-blue', {
    variants: {
        variant: {
            default: 'bg-blue hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-600 text-white',
            destructive: 'bg-red hover:bg-red-600 focus:bg-red-700 active:bg-red-600 text-white',
            warning: 'bg-amber-400 hover:bg-amber-500 focus:bg-amber-600 active:bg-amber-500 text-amber-900',
            outline: '!border border-accent bg-background hover:bg-muted hover:text-accent-foreground',
            secondary: 'bg-secondary hover:bg-muted focus:bg-accent',
            ghost: 'hover:bg-secondary focus:bg-accent',
            link: 'text-blue hover:underline hover:text-blue-700 font-semibold !p-0 !h-[unset] !min-h-[unset]',
        },
        size: {
            xs: 'min-h-[26px] h-[26px] px-2 text-xs rounded-lg',
            sm: 'min-h-[36px] h-[36px] px-3 text-sm rounded-xl',
            default: 'min-h-[40px] h-[40px] py-2 px-4 text-sm rounded-xl',
            lg: 'min-h-[44px] h-[44px] px-4 rounded-xl',
            xl: 'min-h-[52px] h-[52px] px-4 rounded-xl',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});
const buttonLoaderVariants = cva('animate-spin', {
    variants: {
        size: {
            xs: 'w-4 h-4',
            sm: 'w-[18px] h-[18px]',
            default: 'w-5 h-5',
            lg: 'w-5 h-5 stroke-[2px]',
            xl: 'w-5 h-5 stroke-[2px]',
        },
    },
    defaultVariants: {
        size: 'default',
    },
});
const buttonIconVariants = cva('', {
    variants: {
        size: {
            xs: 'w-4 h-4',
            sm: 'w-[18px] h-[18px]',
            default: 'w-5 h-5',
            lg: 'w-5 h-5',
            xl: 'w-5 h-5',
        },
    },
    defaultVariants: {
        size: 'default',
    },
});
const Button = React.forwardRef((_a, ref) => {
    var { fullWidth, icon: Icon, iconProps, iconPosition = 'start', disabled = false, className, variant, size, children, asChild = false, loading = false, testId, id } = _a, props = __rest(_a, ["fullWidth", "icon", "iconProps", "iconPosition", "disabled", "className", "variant", "size", "children", "asChild", "loading", "testId", "id"]);
    const Comp = asChild ? Slot : 'button';
    return (_jsx(Comp, Object.assign({ disabled: loading ? true : disabled, className: classNames(buttonVariants({
            variant,
            size,
            className: classNames(className, fullWidth ? 'flex-1 w-full' : ''),
        })), ref: ref }, props, { "testdata-id": `${testId || id}-button`, children: _jsxs(ButtonContent, { asChild: asChild, children: [loading ? (_jsx(Loader2, { className: buttonLoaderVariants({ size }) })) : Icon && iconPosition === 'start' ? (_jsx(Icon, Object.assign({}, iconProps, { className: buttonIconVariants({
                        size,
                        className: iconProps === null || iconProps === void 0 ? void 0 : iconProps.className,
                    }) }))) : null, children, Icon && iconPosition === 'end' ? (_jsx(Icon, Object.assign({}, iconProps, { className: buttonIconVariants({
                        size,
                        className: iconProps === null || iconProps === void 0 ? void 0 : iconProps.className,
                    }) }))) : null] }) })));
});
Button.displayName = 'Button';
const ButtonContent = React.forwardRef(function Button(_a, ref) {
    var { asChild, children } = _a, props = __rest(_a, ["asChild", "children"]);
    if (asChild) {
        return (_jsx("div", Object.assign({ className: "inline-flex gap-1", ref: ref }, props, { children: children })));
    }
    return _jsx(_Fragment, { children: children });
});
export { Button, buttonIconVariants, buttonLoaderVariants, buttonVariants };
//# sourceMappingURL=button.js.map