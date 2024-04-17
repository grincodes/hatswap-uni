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
import classNames from 'classnames';
import React from 'react';
import { SkeletonCircle, SkeletonText } from '../skeleton';
export const ListItem = (_a) => {
    var _b, _c, _d;
    var { as, icon: Icon, iconProps, subtitle, title, onClick, className, value, loading = false } = _a, rest = __rest(_a, ["as", "icon", "iconProps", "subtitle", "title", "onClick", "className", "value", "loading"]);
    const Component = as || 'button';
    return (_jsx(Component, Object.assign({}, rest, { type: "button", onClick: onClick, className: classNames(className, subtitle ? 'items-start' : 'items-center', 'relative flex gap-4 px-4 py-3 w-full cursor-pointer'), children: loading ? (_jsxs(_Fragment, { children: [Icon && _jsx(SkeletonCircle, { radius: (_b = iconProps === null || iconProps === void 0 ? void 0 : iconProps.width) !== null && _b !== void 0 ? _b : 18 }), _jsxs("div", { className: "flex flex-col gap-0.5 items-start w-full", children: [_jsx(SkeletonText, { fontSize: "sm" }), subtitle && _jsx(SkeletonText, { fontSize: "xs" })] })] })) : (_jsxs(_Fragment, { children: [Icon && (_jsx("div", { style: {
                        minWidth: (_c = iconProps === null || iconProps === void 0 ? void 0 : iconProps.width) !== null && _c !== void 0 ? _c : 18,
                        minHeight: (_d = iconProps === null || iconProps === void 0 ? void 0 : iconProps.height) !== null && _d !== void 0 ? _d : 18,
                        paddingTop: subtitle ? 1 : 0,
                    }, children: React.createElement(Icon, Object.assign(Object.assign({ width: 18, height: 18, strokeWidth: 2 }, iconProps), { className: classNames(iconProps === null || iconProps === void 0 ? void 0 : iconProps.className, 'text-blue-500 rounded-full') })) })), _jsxs("div", { className: "flex flex-col gap-0.5 items-start", children: [_jsx("span", { className: "text-sm font-medium dark:text-slate-200", children: title }), subtitle && (_jsx("span", { className: "text-[10px] text-gray-700 dark:text-slate-400 text-left", children: subtitle }))] }), typeof value === 'string' ? (_jsx("span", { className: "text-xs text-gray-500 dark:text-slate-500", children: value })) : (value)] })) })));
};
//# sourceMappingURL=ListItem.js.map