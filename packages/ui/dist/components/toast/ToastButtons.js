import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { Button } from '../button';
import { LinkExternal } from '../link';
export const ToastButtons = ({ href, onDismiss }) => {
    return (_jsxs("div", { className: classNames(href ? 'grid-cols-2' : 'grid-cols-auto', 'grid gap-4 p-4 pt-0'), children: [_jsx(Button, { size: "sm", onClick: onDismiss, variant: "secondary", children: "Dismiss" }), href && (_jsx(Button, { asChild: true, size: "sm", variant: "secondary", children: _jsx(LinkExternal, { href: href, children: "Transaction" }) }))] }));
};
//# sourceMappingURL=ToastButtons.js.map