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
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';
import classNames from 'classnames';
const Switch = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SwitchPrimitives.Root, Object.assign({ className: classNames('peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 focus:border-2 border-transparent  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-blue disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue data-[state=unchecked]:bg-black/[0.10] dark:data-[state=unchecked]:bg-white/[0.10]', className) }, props, { ref: ref, children: _jsx(SwitchPrimitives.Thumb, { className: classNames('pointer-events-none transition-colors block h-5 w-5 rounded-full data-[state=unchecked]:bg-gray-50 dark:data-[state=unchecked]:bg-slate-900 data-[state=checked]:bg-white dark:data-[state=checked]:bg-white ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0') }) })));
});
Switch.displayName = SwitchPrimitives.Root.displayName;
export { Switch };
//# sourceMappingURL=switch.js.map