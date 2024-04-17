import { FC, ReactNode } from 'react';
import { ListControlProps } from './ListControl';
import { ListItemComponent } from './ListItem';
import { ListKeyValueProps } from './ListKeyValue';
import { ListLabelProps } from './ListLabel';
import { ListMenuItemComponent } from './ListMenuItem';
type List<T> = FC<T> & {
    Item: ListItemComponent;
    MenuItem: ListMenuItemComponent;
    Label: FC<ListLabelProps>;
    Control: FC<ListControlProps>;
    KeyValue: FC<ListKeyValueProps>;
};
export interface ListProps {
    children: ReactNode;
    className?: string;
}
export declare const List: List<ListProps>;
export {};
//# sourceMappingURL=List.d.ts.map