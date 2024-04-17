import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { IconComponent } from '../types';
declare const textFieldVariants: (props?: ({
    size?: "default" | "sm" | null | undefined;
    variant?: "default" | "outline" | "naked" | null | undefined;
    isError?: "yes" | "no" | null | undefined;
    hasIcon?: "yes" | "no" | null | undefined;
    hasUnit?: "yes" | "no" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
type InputType = 'text' | 'number' | 'percent';
interface TextFieldBaseProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, Omit<VariantProps<typeof textFieldVariants>, 'isError'> {
    isError?: boolean;
    id?: string;
    icon?: IconComponent;
    iconProps?: Omit<React.ComponentProps<'svg'>, 'width' | 'height'>;
    unit?: string;
}
interface TextFieldDynamicProps<T extends InputType> {
    type: T;
    maxDecimals?: T extends 'number' ? number : never;
    onValueChange?(val: string): void;
}
export type TextFieldProps<T extends InputType> = TextFieldBaseProps & TextFieldDynamicProps<T>;
declare const TextField: React.ForwardRefExoticComponent<TextFieldBaseProps & TextFieldDynamicProps<InputType> & React.RefAttributes<HTMLInputElement>>;
declare const TextFieldDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export { TextField, type TextFieldBaseProps, TextFieldDescription, textFieldVariants, };
//# sourceMappingURL=text-field.d.ts.map