import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { Card } from '../card';
export const ListControl = ({ children, className }) => {
    return (_jsx(Card, { className: classNames('!border-none bg-white dark:!bg-secondary rounded-xl overflow-hidden shadow-sm', className), children: children }));
};
//# sourceMappingURL=ListControl.js.map