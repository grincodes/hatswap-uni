import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Chain } from 'sushi/chain';
import { HalfCircleIcon } from '../icons/HalfCircleIcon';
import { ToastContent } from './ToastContent';
export const ToastInfo = ({ href, chainId, txHash, summary, }) => {
    var _a;
    const txUrl = href
        ? href
        : txHash
            ? (_a = Chain.from(chainId)) === null || _a === void 0 ? void 0 : _a.getTxUrl(txHash)
            : '';
    return (_jsx(_Fragment, { children: _jsx(ToastContent, { href: txUrl, icon: _jsx(HalfCircleIcon, { width: 18, height: 18, className: "text-blue" }), summary: summary }) }));
};
//# sourceMappingURL=ToastInfo.js.map