import { type VariantProps } from 'class-variance-authority';
import React from 'react';
declare const containerVariants: (props?: ({
    maxWidth?: "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "full" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | "screen-3xl" | "screen-4xl" | "7xl" | "6xl" | "5xl" | "4xl" | "md" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ContainerProps extends React.ButtonHTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
    id?: string;
    asChild?: boolean;
    className?: string;
}
declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLDivElement>>;
export { Container, containerVariants };
//# sourceMappingURL=container.d.ts.map