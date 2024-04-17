import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from 'class-variance-authority';
import classNames from 'classnames';
import { forwardRef } from 'react';
const statVariants = cva('', {
    variants: {
        size: {
            xs: 'flex flex-col gap-1',
            sm: 'flex flex-col gap-1',
            default: 'flex flex-col gap-1',
            lg: 'flex flex-col gap-1',
            xl: 'flex flex-col gap-1',
        },
    },
    defaultVariants: {
        size: 'default',
    },
});
const Stat = forwardRef(({ children, className, size }, ref) => {
    return (_jsx("div", { ref: ref, className: statVariants({ size, className }), children: children }));
});
Stat.displayName = 'Stat';
const statLabelVariants = cva('text-muted-foreground font-normal', {
    variants: {
        size: {
            xs: 'text-xs',
            sm: 'text-sm',
            default: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
        },
        align: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
        },
    },
    defaultVariants: {
        size: 'default',
        align: 'left',
    },
});
const StatLabel = forwardRef(({ align, children, size, className }, ref) => {
    return (_jsx("span", { ref: ref, className: statLabelVariants({ size, align, className }), children: children }));
});
StatLabel.displayName = 'StatLabel';
const statValueVariants = cva('font-medium', {
    variants: {
        size: {
            xs: 'text-xs',
            sm: 'text-sm',
            default: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'font-bold text-2xl',
            '3xl': 'font-bold text-3xl',
            '4xl': 'font-bold text-4xl',
        },
        align: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
        },
    },
    defaultVariants: {
        size: 'default',
        align: 'left',
    },
});
const StatValue = forwardRef(({ align, children, size, className }, ref) => {
    return (_jsx("span", { ref: ref, className: classNames(statValueVariants({ size, align }), className), children: children }));
});
StatValue.displayName = 'StatValue';
export { Stat, StatLabel, StatValue };
//# sourceMappingURL=stat.js.map