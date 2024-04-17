import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { Children, cloneElement, isValidElement } from 'react';
export const IconList = ({ children, iconWidth, iconHeight, }) => {
    return (_jsx("div", { className: "flex items-center", children: _jsx("div", { className: classNames('inline-flex'), children: Children.map(children, (child, index) => {
                if (isValidElement(child)) {
                    return (_jsx("div", { className: "rounded-full inline-flex z-10 border-2 ring-gray-50 dark:ring-slate-950", style: { marginLeft: index > 0 ? -iconWidth / 3 : 0 }, children: cloneElement(child, Object.assign(Object.assign({}, child.props), { width: iconWidth || child.props.width, height: iconHeight || child.props.height })) }));
                }
            }) }) }));
};
//# sourceMappingURL=IconList.js.map