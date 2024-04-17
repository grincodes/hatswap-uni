import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { IconComponent } from '../types';
declare const chipVariants: (props?: ({
    variant?: "default" | "outline" | "blue" | "green" | "pink" | "destructive" | "secondary" | "ghost" | null | undefined;
    hasRemove?: "yes" | "no" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ChipProps extends React.HTMLAttributes<HTMLDivElement>, Omit<VariantProps<typeof chipVariants>, 'hasRemove'> {
    icon?: IconComponent;
    iconProps?: Omit<React.ComponentProps<'svg'>, 'width' | 'height'>;
    onClose?: () => void;
}
declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLDivElement>>;
export { Chip, chipVariants };
//# sourceMappingURL=chip.d.ts.map