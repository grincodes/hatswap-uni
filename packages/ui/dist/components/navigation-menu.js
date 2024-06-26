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
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import classNames from 'classnames';
import { buttonVariants } from './button';
const NavigationMenu = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsxs(NavigationMenuPrimitive.Root, Object.assign({ ref: ref, className: classNames('relative z-10 flex max-w-max flex-1 items-center justify-center', className) }, props, { children: [children, _jsx(NavigationMenuViewport, {})] })));
});
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(NavigationMenuPrimitive.List, Object.assign({ ref: ref, className: classNames('group flex flex-1 list-none items-center justify-center space-x-1', className) }, props)));
});
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = () => buttonVariants({ variant: 'ghost' });
const NavigationMenuTrigger = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsxs(NavigationMenuPrimitive.Trigger, Object.assign({ ref: ref, className: classNames(navigationMenuTriggerStyle(), 'group', className, '!gap-0.5 !pr-3') }, props, { children: [children, ' ', _jsx(ChevronDown, { className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180", "aria-hidden": "true" })] })));
});
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(NavigationMenuPrimitive.Content, Object.assign({ ref: ref, className: classNames('left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ', className) }, props)));
});
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuViewport = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", { className: classNames('absolute left-0 top-full flex w-full min-w-fit justify-center'), children: _jsx(NavigationMenuPrimitive.Viewport, Object.assign({ className: classNames('origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl bg-white/50 dark:bg-slate-800/50 paper text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]', className), ref: ref }, props)) }));
});
NavigationMenuViewport.displayName =
    NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(NavigationMenuPrimitive.Indicator, Object.assign({ ref: ref, className: classNames('top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in', className) }, props, { children: _jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }) })));
});
NavigationMenuIndicator.displayName =
    NavigationMenuPrimitive.Indicator.displayName;
export { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport, };
//# sourceMappingURL=navigation-menu.js.map