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
import { cva } from 'class-variance-authority';
import classNames from 'classnames';
import React from 'react';
import { Container } from './container';
const widgetVariants = cva('flex flex-col relative overflow-hidden', {
    variants: {
        variant: {
            default: 'mx-auto p-6 dark:shadow dark:shadow-slate-900 bg-white dark:bg-slate-800',
            empty: '',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
const widgetActionVariants = cva('absolute', {
    variants: {
        variant: {
            default: 'top-6 right-6',
            empty: 'top-0 right-0',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
const Widget = React.forwardRef((_a, ref) => {
    var { variant, id, className } = _a, props = __rest(_a, ["variant", "id", "className"]);
    return (_jsx(Container, Object.assign({ id: id, ref: ref, className: widgetVariants({ variant, className }) }, props)));
});
Widget.displayName = 'WidgetRoot';
const WidgetHeader = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: classNames('flex flex-col space-y-1.5 text-left mb-4', className) }, props)));
};
WidgetHeader.displayName = 'WidgetHeader';
const WidgetTitle = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: classNames('text-lg font-semibold leading-none tracking-tight mr-[64px]', className) }, props)));
};
WidgetTitle.displayName = 'WidgetTitle';
const WidgetDescription = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: classNames('text-sm text-muted-foreground mr-[64px]', className) }, props)));
};
WidgetDescription.displayName = 'WidgetDescription';
const WidgetAction = (_a) => {
    var { variant, className } = _a, props = __rest(_a, ["variant", "className"]);
    return (_jsx("div", Object.assign({ className: widgetActionVariants({ variant, className }) }, props)));
};
WidgetAction.displayName = 'WidgetAction';
const WidgetFooter = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: classNames('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4', className) }, props)));
};
WidgetFooter.displayName = 'WidgetFooter';
export { Widget, WidgetAction, WidgetDescription, WidgetFooter, WidgetHeader, WidgetTitle, };
//# sourceMappingURL=widget.js.map