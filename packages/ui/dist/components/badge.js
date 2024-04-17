import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
export const Badge = ({ badgeContent, position = 'top-left', children, className, }) => {
    return (_jsxs("div", { className: "relative", children: [_jsx("div", { className: classNames(className, 'absolute z-10', position === 'top-left'
                    ? '-left-[25%] -top-[15%]'
                    : position === 'bottom-right'
                        ? '-right-[25%] -bottom-[15%]'
                        : position === 'top-right'
                            ? '-right-[25%] -top-[15%]'
                            : position === 'bottom-left'
                                ? '-left-[25%] -bottom-[15%]'
                                : ''), children: badgeContent }), children] }));
};
//# sourceMappingURL=badge.js.map