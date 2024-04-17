import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { IconComponent } from '../types';
declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "outline" | "destructive" | "warning" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const buttonLoaderVariants: (props?: ({
    size?: "default" | "xs" | "sm" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const buttonIconVariants: (props?: ({
    size?: "default" | "xs" | "sm" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    icon?: IconComponent;
    iconProps?: Omit<React.ComponentProps<'svg'>, 'width' | 'height'>;
    iconPosition?: 'start' | 'end';
    asChild?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    testId?: string;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonIconVariants, buttonLoaderVariants, buttonVariants };
//# sourceMappingURL=button.d.ts.map