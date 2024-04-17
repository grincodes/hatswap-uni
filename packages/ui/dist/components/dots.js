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
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import * as React from 'react';
const Dots = React.forwardRef((_a, ref) => {
    var { className, asChild, children } = _a, props = __rest(_a, ["className", "asChild", "children"]);
    const Comp = asChild ? Slot : 'span';
    return (_jsx(Comp, Object.assign({ ref: ref, className: classNames("after:inline-block after:content-['.'] after:animate-ellipsis after:w-4 after:text-left", className) }, props, { children: children })));
});
Dots.displayName = 'Dots';
export { Dots };
//# sourceMappingURL=dots.js.map