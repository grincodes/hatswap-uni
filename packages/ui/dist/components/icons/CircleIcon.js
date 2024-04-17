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
import classNames from 'classnames';
export const CircleIcon = (_a) => {
    var { text, className } = _a, props = __rest(_a, ["text", "className"]);
    return (_jsxs("svg", Object.assign({ viewBox: "0 0 24 24", fill: "transparent", stroke: "currentColor", fontSize: "1.5rem", strokeWidth: "2", className: classNames('shrink-0 block rounded-full', className) }, props, { children: [_jsx("circle", { cx: "12", cy: "12", r: "9.6" }), typeof text !== 'undefined' && (_jsx("text", { x: "12", y: "16", textAnchor: "middle", fontSize: "0.75rem", stroke: "var(--primary)", fontFamily: "inherit", children: text }))] })));
};
//# sourceMappingURL=CircleIcon.js.map