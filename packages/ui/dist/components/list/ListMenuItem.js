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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Transition } from '@headlessui/react';
import { ArrowSmallRightIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import React, { Fragment, useState } from 'react';
export const ListMenuItem = (_a) => {
    var _b, _c, _d, _e, _f, _g, _h;
    var { as, icon: Icon, iconProps, subtitle, title, onClick, hoverIcon: HoverIcon, hoverIconProps, className, disabled = false } = _a, rest = __rest(_a, ["as", "icon", "iconProps", "subtitle", "title", "onClick", "hoverIcon", "hoverIconProps", "className", "disabled"]);
    const Component = as || 'button';
    const [hover, setHover] = useState(false);
    return (_jsxs(Component, Object.assign({}, rest, { type: "button", onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onClick: onClick, className: classNames(className, disabled ? 'opacity-40 !pointer-events-none cursor-default' : '', subtitle ? 'items-start' : 'items-center', 'hover:bg-muted relative flex gap-4 px-4 py-3 w-full cursor-pointer rounded-xl'), children: [Icon && (_jsx("div", { style: {
                    minWidth: (_b = iconProps === null || iconProps === void 0 ? void 0 : iconProps.width) !== null && _b !== void 0 ? _b : 18,
                    minHeight: (_c = iconProps === null || iconProps === void 0 ? void 0 : iconProps.height) !== null && _c !== void 0 ? _c : 18,
                    paddingTop: subtitle ? 1 : 0,
                }, children: React.createElement(Icon, Object.assign(Object.assign({}, iconProps), { width: 18, height: 18, strokeWidth: 2, className: classNames(iconProps === null || iconProps === void 0 ? void 0 : iconProps.className, 'text-blue-500') })) })), _jsxs("div", { className: "flex flex-col gap-0.5 items-start", children: [_jsx("span", { className: "text-sm font-medium text-gray-900 dark:text-slate-200", children: title }), subtitle && (_jsx("span", { className: "text-sm font-normal text-gray-600 dark:text-slate-400 text-left", children: subtitle }))] }), _jsx(Transition, { as: Fragment, show: hover, enter: "ease-in-out duration-300", enterFrom: "translate-x-[10px] opacity-0", enterTo: "translate-x-[-8px] opacity-100", leave: "ease-in-out duration-300", leaveFrom: "translate-x-[-8px] opacity-100", leaveTo: "translate-x-[10px] opacity-0", unmount: false, children: _jsx("div", { className: "absolute right-0 top-0 bottom-0 flex justify-center items-center", children: HoverIcon ? (_jsx(HoverIcon, Object.assign({}, hoverIconProps, { width: (_d = hoverIconProps === null || hoverIconProps === void 0 ? void 0 : hoverIconProps.width) !== null && _d !== void 0 ? _d : 20, height: (_e = hoverIconProps === null || hoverIconProps === void 0 ? void 0 : hoverIconProps.height) !== null && _e !== void 0 ? _e : 20 }))) : (_jsx(ArrowSmallRightIcon, Object.assign({}, hoverIconProps, { width: (_f = hoverIconProps === null || hoverIconProps === void 0 ? void 0 : hoverIconProps.width) !== null && _f !== void 0 ? _f : 24, height: (_g = hoverIconProps === null || hoverIconProps === void 0 ? void 0 : hoverIconProps.height) !== null && _g !== void 0 ? _g : 24, strokeWidth: (_h = hoverIconProps === null || hoverIconProps === void 0 ? void 0 : hoverIconProps.strokeWidth) !== null && _h !== void 0 ? _h : 5, fill: "currentColor", className: classNames(hoverIconProps === null || hoverIconProps === void 0 ? void 0 : hoverIconProps.className, '!text-blue') }))) }) })] })));
};
//# sourceMappingURL=ListMenuItem.js.map