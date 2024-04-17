import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Chain } from 'sushi/chain';
import { ToastContent } from './ToastContent';
export const ToastCompleted = ({ type: _type, href, chainId, txHash, onDismiss: _onDismiss, summary, }) => {
    var _a;
    const txUrl = href
        ? href
        : txHash
            ? (_a = Chain.from(chainId)) === null || _a === void 0 ? void 0 : _a.getTxUrl(txHash)
            : '';
    return (_jsx(_Fragment, { children: _jsx(ToastContent, { href: txUrl, summary: summary }) }));
};
//# sourceMappingURL=ToastCompleted.js.map