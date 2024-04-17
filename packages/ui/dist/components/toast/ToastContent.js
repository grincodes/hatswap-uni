'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { TimeAgo } from '../time-ago';
export const ToastContent = ({ icon, href, summary, code = false, }) => {
    const [date] = useState(new Date());
    return (_jsxs("div", { className: "p-4 flex gap-4 items-start", children: [icon && _jsx("div", { className: "mt-0.5", children: icon }), _jsx("div", { className: "flex flex-col gap-1 overflow-hidden", children: !code ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "font-semibold mb-1 text-sm text-gray-900 dark:text-slate-200", children: summary }), href && (_jsxs("a", { href: href, target: "_blank", className: "flex items-center text-sm font-medium gap-2 text-gray-700 dark:text-slate-400", rel: "noreferrer", children: ["View on explorer", ' ', _jsx(ArrowTopRightOnSquareIcon, { width: 16, height: 16, strokeWidth: 2 })] })), _jsx("span", { className: "text-[10px] font-medium text-gray-600 dark:text-slate-400", children: _jsx(TimeAgo, { value: date }) })] })) : (_jsx("div", { className: "scroll bg-gray-100 dark:bg-black/20 p-2 px-3 rounded-lg border border-slate-200/10 text-[10px] text-gray-900 dark:text-slate-200 break-all max-h-[80px] overflow-y-auto", children: _jsx("code", { children: summary }) })) })] }));
};
//# sourceMappingURL=ToastContent.js.map