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
import { XMarkIcon } from '@heroicons/react/20/solid';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import classNames from 'classnames';
const chipVariants = cva('whitespace-nowrap inline-flex items-center rounded-lg px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background', {
    variants: {
        variant: {
            default: 'bg-blue hover:bg-blue-600 focus:bg-blue-700 border-transparent text-primary-foreground',
            secondary: 'bg-secondary hover:bg-muted focus:bg-accent border-transparent text-secondary-foreground',
            destructive: 'bg-red hover:bg-red-600 focus:bg-red-700 border-transparent text-destructive-foreground',
            ghost: 'hover:bg-muted focus:bg-accent',
            outline: 'text-foreground',
            pink: 'bg-pink/10 text-pink',
            blue: 'bg-blue/10 text-blue',
            green: 'bg-green/10 text-green',
        },
        hasRemove: {
            yes: 'pr-0.5',
            no: '',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
const Chip = React.forwardRef((_a, ref) => {
    var { className, variant, icon: Icon, onClose, iconProps, children } = _a, props = __rest(_a, ["className", "variant", "icon", "onClose", "iconProps", "children"]);
    return (_jsxs("div", Object.assign({ className: classNames(chipVariants({
            variant,
            className: classNames(className, 'flex items-center gap-1 flex-nowrap'),
            hasRemove: onClose ? 'yes' : 'no',
        })), ref: ref }, props, { children: [Icon ? _jsx(Icon, Object.assign({}, iconProps, { width: 12, height: 12 })) : null, _jsx("span", { children: children }), onClose ? (_jsx("div", { role: "button", onClick: onClose, onKeyDown: onClose, className: "p-0.5 bg-secondary hover:bg-accent rounded-full cursor-pointer", children: _jsx(XMarkIcon, { width: 12, height: 12 }) })) : null] })));
});
Chip.displayName = 'Chip';
export { Chip, chipVariants };
//# sourceMappingURL=chip.js.map