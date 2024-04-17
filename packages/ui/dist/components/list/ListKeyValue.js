import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { SkeletonText } from '../skeleton';
export const ListKeyValue = ({ title, subtitle, children, skeleton, flex = false, className = '', }) => {
    if (skeleton) {
        return (_jsxs("div", { className: "grid grid-cols-2 gap-2 px-4 py-3", children: [_jsxs("div", { className: "flex flex-col gap-0.5", children: [_jsx(SkeletonText, { fontSize: "sm" }), subtitle && _jsx(SkeletonText, { fontSize: "xs" })] }), _jsx("div", { className: "flex justify-end", children: _jsx(SkeletonText, { fontSize: "sm" }) })] }));
    }
    return (_jsxs("div", { className: classNames(className, flex ? 'flex justify-between items-center' : 'grid grid-cols-2', 'gap-2 py-3 px-4'), children: [_jsxs("div", { className: "flex flex-col gap-0.5", children: [_jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-slate-300", children: title }), subtitle && (_jsx("span", { className: "text-xs text-muted-foreground", children: subtitle }))] }), _jsx("div", { className: "flex justify-end", children: _jsx("span", { className: "flex justify-end w-full text-sm font-medium text-right text-gray-900 truncate dark:text-slate-50", children: children }) })] }));
};
//# sourceMappingURL=ListKeyValue.js.map