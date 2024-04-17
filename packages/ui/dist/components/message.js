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
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import { IconButton } from './iconbutton';
const messageVariants = cva('relative', {
    variants: {
        variant: {
            info: 'bg-blue/10 text-blue',
            destructive: 'bg-red/10 text-red',
            warning: 'bg-yellow/10 dark:text-yellow text-amber-900',
            muted: 'bg-secondary',
            success: 'bg-green/10 text-green',
        },
        size: {
            xs: 'p-6 text-xs rounded-lg',
            sm: 'p-6 text-sm rounded-lg',
            default: 'p-6 rounded-xl',
        },
        hasClose: {
            yes: '',
            no: '',
        },
    },
    defaultVariants: {
        variant: 'info',
        size: 'default',
    },
});
const Message = React.forwardRef((_a, ref) => {
    var { onClose, variant, size, className, children, asChild } = _a, props = __rest(_a, ["onClose", "variant", "size", "className", "children", "asChild"]);
    const Comp = asChild ? Slot : 'div';
    return (_jsxs(Comp, Object.assign({}, props, { ref: ref, className: messageVariants({
            variant,
            size,
            className,
            hasClose: onClose ? 'yes' : 'no',
        }), children: [children, onClose ? (_jsx("div", { className: "absolute right-1 top-1 bottom-0", children: _jsx(IconButton, { variant: "ghost", size: "xs", name: "close", icon: XMarkIcon, onClick: onClose }) })) : null] })));
});
Message.displayName = 'Message';
export { Message };
//# sourceMappingURL=message.js.map