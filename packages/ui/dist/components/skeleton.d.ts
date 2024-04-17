import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare function SkeletonBox(props: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export interface CircleProps extends React.HTMLAttributes<HTMLDivElement> {
    radius: number;
}
declare function SkeletonCircle(props: CircleProps): import("react/jsx-runtime").JSX.Element;
declare const skeletonTextVariants: (props?: ({
    fontSize?: "default" | "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | null | undefined;
    align?: "center" | "left" | "right" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface SkeletonTextProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'>, VariantProps<typeof skeletonTextVariants> {
}
declare function SkeletonText({ className, align, fontSize, ...props }: SkeletonTextProps): import("react/jsx-runtime").JSX.Element;
export { SkeletonBox, SkeletonCircle, SkeletonText };
//# sourceMappingURL=skeleton.d.ts.map