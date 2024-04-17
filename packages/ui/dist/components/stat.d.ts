/// <reference types="react" />
import { type VariantProps } from 'class-variance-authority';
declare const statVariants: (props?: ({
    size?: "default" | "xs" | "sm" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface StatProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'label' | 'value'>, VariantProps<typeof statVariants> {
}
declare const Stat: import("react").ForwardRefExoticComponent<StatProps & import("react").RefAttributes<HTMLDivElement>>;
declare const statLabelVariants: (props?: ({
    size?: "default" | "xs" | "sm" | "lg" | "xl" | null | undefined;
    align?: "center" | "left" | "right" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface StatLabelProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'label' | 'value'>, VariantProps<typeof statLabelVariants> {
}
declare const StatLabel: import("react").ForwardRefExoticComponent<StatLabelProps & import("react").RefAttributes<HTMLSpanElement>>;
declare const statValueVariants: (props?: ({
    size?: "default" | "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | null | undefined;
    align?: "center" | "left" | "right" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface StatValueProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'label' | 'value'>, VariantProps<typeof statValueVariants> {
}
declare const StatValue: import("react").ForwardRefExoticComponent<StatValueProps & import("react").RefAttributes<HTMLSpanElement>>;
export { Stat, StatLabel, StatValue };
//# sourceMappingURL=stat.d.ts.map