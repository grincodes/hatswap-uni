import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { ListControl } from './ListControl';
import { ListItem } from './ListItem';
import { ListKeyValue } from './ListKeyValue';
import { ListLabel } from './ListLabel';
import { ListMenuItem } from './ListMenuItem';
export const List = ({ children, className }) => {
    return (_jsx("div", { className: classNames('flex flex-col gap-3 pt-3', className), children: children }));
};
List.Item = ListItem;
List.MenuItem = ListMenuItem;
List.Label = ListLabel;
List.Control = ListControl;
List.KeyValue = ListKeyValue;
//# sourceMappingURL=List.js.map