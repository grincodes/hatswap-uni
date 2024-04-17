import React, { ReactNode } from 'react';
import { PolymorphicComponentProps } from '../../types';
interface Props {
    title: ReactNode;
    subtitle?: ReactNode;
    onClick?(): void;
    value?: ReactNode;
    loading?: boolean;
}
export type ListItemProps<P extends React.ElementType, C extends React.ElementType> = {
    icon?: P;
    iconProps: React.ComponentProps<P> & {
        width?: number;
        height?: number;
        className?: string;
    };
} & PolymorphicComponentProps<C, Props>;
export type ListItemComponent = <P extends React.ElementType = 'svg', C extends React.ElementType = 'button'>(props: ListItemProps<P, C>) => React.ReactElement | null;
export declare const ListItem: ListItemComponent;
export {};
//# sourceMappingURL=ListItem.d.ts.map