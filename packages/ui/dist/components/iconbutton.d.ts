import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { IconComponent } from '../types';
import { buttonVariants } from './button';
declare const iconButtonVariants: (props?: ({
    variant?: "link" | "default" | "outline" | "destructive" | "warning" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    icon: IconComponent | string;
    iconProps?: Omit<React.ComponentProps<'svg'>, 'width' | 'height'>;
    name: string;
    description?: string;
    testId?: string;
    asChild?: boolean;
    children?: React.ReactNode;
}
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { IconButton, iconButtonVariants };
//# sourceMappingURL=iconbutton.d.ts.map