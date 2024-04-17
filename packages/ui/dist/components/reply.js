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
import { forwardRef } from 'react';
import classNames from 'classnames';
const ReplyContent = forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx("div", Object.assign({}, props, { ref: ref, className: classNames(className, 'flex flex-col flex-1 w-full border border-accent bg-secondary p-4 rounded-xl'), children: children })));
});
ReplyContent.displayName = 'ReplyContent';
const ReplyArrow = forwardRef((_props, _ref) => {
    return (_jsx("div", { className: "absolute left-2 top-0 bottom-0 w-5 h-full", children: _jsx("div", { className: "absolute left-0 bottom-0 top-0 right-0 h-[50%] border-b border-l rounded-bl-[20px] border-accent" }) }));
});
ReplyArrow.displayName = 'ReplyArrow';
const Reply = forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsxs("div", Object.assign({}, props, { ref: ref, className: classNames(className, 'pl-2 relative flex flex-1 gap-4'), children: [_jsx(ReplyArrow, {}), _jsx("div", { className: "pl-7 w-full", children: children })] })));
});
Reply.displayName = 'Reply';
export { Reply, ReplyArrow, ReplyContent };
//# sourceMappingURL=reply.js.map