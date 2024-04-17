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
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';
import classNames from 'classnames';
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(TabsPrimitive.List, Object.assign({ ref: ref, className: classNames('border border-accent inline-flex h-10 items-center justify-center rounded-lg bg-background p-1 px-0.5 text-muted-foreground', className) }, props)));
});
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(TabsPrimitive.Trigger, Object.assign({ ref: ref, className: classNames('border data-[state=inactive]:border-transparent data-[state=active]:shadow-sm data-[state=active]:border-accent rounded-lg inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium transition-all ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-blue disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white dark:data-[state=active]:bg-accent data-[state=active]:text-primary', className) }, props)));
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(TabsPrimitive.Content, Object.assign({ tabIndex: -1, ref: ref, className: classNames('mt-2 focus-visible:none', className) }, props)));
});
TabsContent.displayName = TabsPrimitive.Content.displayName;
export { Tabs, TabsContent, TabsList, TabsPrimitive, TabsTrigger };
//# sourceMappingURL=tabs.js.map