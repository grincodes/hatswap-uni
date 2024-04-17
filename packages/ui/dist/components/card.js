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
import { cva } from 'class-variance-authority';
import * as React from 'react';
import { unwrapToken } from 'sushi/currency';
import classNames from 'classnames';
import { Currency } from './currency';
import { SkeletonText } from './skeleton';
const cardVariants = cva('relative rounded-xl border border-accent', {
    variants: {
        variant: {
            default: 'shadow-sm bg-white dark:bg-background',
            outline: '',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
const Card = React.forwardRef((_a, ref) => {
    var { variant, className } = _a, props = __rest(_a, ["variant", "className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cardVariants({ variant, className }) }, props)));
});
Card.displayName = 'Card';
const CardOverlay = React.forwardRef((_a, ref) => {
    var { show, className } = _a, props = __rest(_a, ["show", "className"]);
    return (_jsx("div", Object.assign({ "data-state": show ? 'active' : 'inactive', ref: ref, className: classNames('data-[state=active]:flex data-[state=inactive]:hidden rounded-xl z-10 bg-white/[0.8] dark:bg-slate-900/[0.8] pointer-events-none absolute inset-0 justify-center items-center', className) }, props)));
});
CardOverlay.displayName = 'CardOverlay';
const CardHeader = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: classNames('flex flex-col space-y-1.5 p-6 whitespace-pre-wrap', className) }, props)));
});
CardHeader.displayName = 'CardHeader';
const CardTitle = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("h3", Object.assign({ ref: ref, className: classNames('text-lg font-semibold leading-none tracking-tight', className) }, props)));
});
CardTitle.displayName = 'CardTitle';
const CardDescription = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: classNames('text-sm text-muted-foreground', className) }, props)));
});
CardDescription.displayName = 'CardDescription';
const CardGroup = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: classNames('flex flex-col gap-3', className) }, props)));
});
CardGroup.displayName = 'CardGroup';
const CardLabel = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("span", Object.assign({ ref: ref, className: classNames('font-normal text-xs text-gray-400 dark:text-slate-600', className) }, props)));
});
CardLabel.displayName = 'CardLabel';
const CardItem = React.forwardRef((_a, ref) => {
    var { skeleton, flex, subtitle, title, children, className } = _a, props = __rest(_a, ["skeleton", "flex", "subtitle", "title", "children", "className"]);
    if (skeleton) {
        return (_jsxs("div", Object.assign({ ref: ref, className: "grid grid-cols-2 gap-2" }, props, { children: [_jsxs("div", { className: "flex flex-col gap-0.5", children: [_jsx(SkeletonText, { fontSize: "sm" }), subtitle && _jsx(SkeletonText, { fontSize: "xs" })] }), _jsx("div", { className: "flex justify-end", children: _jsx(SkeletonText, { fontSize: "sm" }) })] })));
    }
    return (_jsxs("div", Object.assign({ ref: ref, className: classNames(className, flex ? 'flex justify-between items-center' : 'grid grid-cols-2', 'gap-2') }, props, { children: [_jsxs("div", { className: "flex flex-col gap-0.5", children: [_jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-slate-300", children: title }), subtitle && (_jsx("span", { className: "text-xs text-muted-foreground", children: subtitle }))] }), _jsx("div", { className: "flex justify-end", children: _jsx("span", { className: "flex justify-end w-full text-sm font-medium text-right text-gray-900 truncate dark:text-slate-50", children: children }) })] })));
});
CardItem.displayName = 'CardItem';
const CardCurrencyAmountItem = React.forwardRef((_a, ref) => {
    var { unwrap = true, isLoading, amount, fiatValue } = _a, props = __rest(_a, ["unwrap", "isLoading", "amount", "fiatValue"]);
    if (isLoading) {
        return _jsx(CardItem, { ref: ref, skeleton: true });
    }
    if (amount) {
        const currency = unwrap ? unwrapToken(amount === null || amount === void 0 ? void 0 : amount.currency) : amount === null || amount === void 0 ? void 0 : amount.currency;
        return (_jsx(CardItem, Object.assign({ title: _jsxs("div", { className: "font-medium flex items-center gap-2 text-muted-foreground", children: [_jsx(Currency.Icon, { currency: currency, width: 18, height: 18 }), ' ', currency.symbol] }), ref: ref }, props, { children: _jsxs("span", { className: "flex gap-1 font-semibold", children: [amount.toSignificant(6), ' ', _jsx("span", { className: "font-normal text-gray-400 dark:text-slate-600", children: fiatValue })] }) })));
    }
    return null;
});
CardCurrencyAmountItem.displayName = 'CardCurrencyAmountItem';
const CardContent = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: classNames('p-6 pt-0 flex flex-col gap-6', className) }, props)));
});
CardContent.displayName = 'CardContent';
const CardFooter = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: classNames(' flex items-center p-6 pt-0', className) }, props)));
});
CardFooter.displayName = 'CardFooter';
export { Card, CardContent, CardCurrencyAmountItem, CardDescription, CardFooter, CardGroup, CardHeader, CardItem, CardLabel, CardOverlay, CardTitle, };
//# sourceMappingURL=card.js.map