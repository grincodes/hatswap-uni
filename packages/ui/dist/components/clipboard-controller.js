import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCopyClipboard } from '@sushiswap/hooks';
export const ClipboardController = ({ children, hideTooltip = false, }) => {
    const [isCopied, setCopied] = useCopyClipboard();
    if (!hideTooltip) {
        return (_jsxs("div", { className: "group relative", children: [children({ setCopied, isCopied }), _jsx("div", { className: "left-0 right-0 absolute group-hover:flex hidden mt-1 justify-center", children: _jsx("span", { className: "bg-gray-600 text-white px-2 py-0.5 rounded-xl whitespace-nowrap text-[10px]", children: isCopied ? 'Copied!' : 'Copy' }) })] }));
    }
    return _jsx(_Fragment, { children: children({ setCopied, isCopied }) });
};
//# sourceMappingURL=clipboard-controller.js.map