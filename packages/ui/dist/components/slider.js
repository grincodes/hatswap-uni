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
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';
import classNames from 'classnames';
const Slider = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsxs(SliderPrimitive.Root, Object.assign({ ref: ref, className: classNames('relative flex w-full touch-none select-none items-center', className) }, props, { children: [_jsx(SliderPrimitive.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: _jsx(SliderPrimitive.Range, { className: "absolute h-full bg-primary" }) }), props.defaultValue ? (props.defaultValue.map((_el, i) => (_jsx(SliderPrimitive.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-blue hover:ring-4 ring-offset-background ring-accent transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" }, i)))) : props.value ? (props.value.map((_el, i) => (_jsx(SliderPrimitive.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-blue hover:ring-4 ring-offset-background ring-accent transition-colors disabled:pointer-events-none disabled:opacity-50" }, i)))) : (_jsx(SliderPrimitive.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-blue hover:ring-4 ring-offset-background ring-accent transition-colors disabled:pointer-events-none disabled:opacity-50" }))] })));
});
Slider.displayName = SliderPrimitive.Root.displayName;
export { Slider };
//# sourceMappingURL=slider.js.map