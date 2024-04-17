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
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import classNames from 'classnames';
const toggleVariants = cva('inline-flex gap-2 items-center justify-center text-sm font-medium transition-colors data-[state=on]:bg-accent data-[state=on]:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 hover:bg-muted hover:text-muted-foreground  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-blue', {
    variants: {
        variant: {
            default: 'bg-transparent',
            outline: 'bg-transparent !border border-accent hover:bg-secondary hover:text-accent-foreground',
        },
        size: {
            xs: 'h-[26px] px-2 text-xs rounded-md',
            default: 'h-10 px-3 rounded-xl',
            sm: 'h-9 px-2.5 rounded-xl',
            lg: 'h-11 px-5 rounded-xl',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});
const Toggle = React.forwardRef((_a, ref) => {
    var { testId, id, className, variant, size } = _a, props = __rest(_a, ["testId", "id", "className", "variant", "size"]);
    return (_jsx(TogglePrimitive.Root, Object.assign({ "testdata-id": `${testId || id}-button`, ref: ref, className: classNames(toggleVariants({ variant, size, className })) }, props)));
});
Toggle.displayName = TogglePrimitive.Root.displayName;
export { Toggle, toggleVariants };
//# sourceMappingURL=toggle.js.map