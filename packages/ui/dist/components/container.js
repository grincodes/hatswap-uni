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
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import classNames from 'classnames';
import React from 'react';
const containerVariants = cva('w-full mx-auto', {
    variants: {
        maxWidth: {
            full: 'max-w-full',
            'screen-sm': 'max-w-screen-sm',
            'screen-md': 'max-w-screen-md',
            'screen-lg': 'max-w-screen-lg',
            'screen-xl': 'max-w-screen-xl',
            'screen-2xl': 'max-w-screen-2xl',
            'screen-3xl': 'max-w-[1792px]',
            'screen-4xl': 'max-w-[2048px]',
            '7xl': 'max-w-7xl',
            '6xl': 'max-w-6xl',
            '5xl': 'max-w-5xl',
            '4xl': 'max-w-4xl',
            '3xl': 'max-w-3xl',
            '2xl': 'max-w-2xl',
            xl: 'max-w-xl',
            lg: 'max-w-lg',
            md: 'max-w-md',
            sm: 'max-w-sm',
            xs: 'max-w-xs',
        },
    },
    defaultVariants: {
        maxWidth: '2xl',
    },
});
const Container = React.forwardRef((_a, ref) => {
    var { className, maxWidth, asChild = false } = _a, props = __rest(_a, ["className", "maxWidth", "asChild"]);
    const Comp = asChild ? Slot : 'div';
    return (_jsx(Comp, Object.assign({ className: classNames(containerVariants({ maxWidth, className })), ref: ref }, props)));
});
Container.displayName = 'Container';
export { Container, containerVariants };
//# sourceMappingURL=container.js.map