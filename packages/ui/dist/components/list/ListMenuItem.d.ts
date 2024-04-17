import React, { ReactNode } from 'react';
import { ExtractProps, IconComponent, PolymorphicComponentProps } from '../../types';
interface Props {
    disabled?: boolean;
    title: ReactNode;
    subtitle?: ReactNode;
    hoverIcon?: IconComponent;
    hoverIconProps?: Omit<React.ComponentProps<'svg'>, 'width' | 'height'> & {
        width: number;
        height: number;
    };
}
export type ListMenuItemProps<P extends React.ElementType, C extends React.ElementType> = {
    icon?: P;
    iconProps?: ExtractProps<P> & {
        width?: number;
        height?: number;
        className?: string;
    };
} & PolymorphicComponentProps<C, Props>;
export type ListMenuItemComponent = <P extends React.ElementType = 'svg', C extends React.ElementType = 'button'>(props: ListMenuItemProps<P, C>) => React.ReactElement | null;
export declare const ListMenuItem: ListMenuItemComponent;
export {};
//# sourceMappingURL=ListMenuItem.d.ts.map