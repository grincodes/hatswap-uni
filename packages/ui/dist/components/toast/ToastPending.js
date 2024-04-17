import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Chain } from 'sushi/chain';
import { Dots } from '../dots';
import { ToastContent } from './ToastContent';
export const ToastPending = ({ type: _type, href, chainId, txHash, onDismiss: _onDismiss, summary, }) => {
    var _a;
    const txUrl = href
        ? href
        : txHash
            ? (_a = Chain.from(chainId)) === null || _a === void 0 ? void 0 : _a.getTxUrl(txHash)
            : '';
    return (_jsx(_Fragment, { children: _jsx(ToastContent, { href: txUrl, summary: _jsx(Dots, { children: summary }) }) }));
};
//# sourceMappingURL=ToastPending.js.map