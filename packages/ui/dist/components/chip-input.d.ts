import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { FC } from 'react';
import { IconComponent } from '../types';
import { chipVariants } from './chip';
import { textFieldVariants } from './text-field';
export type ChipInputRootProps = React.InputHTMLAttributes<HTMLDivElement>;
interface ChipInputProps extends Omit<React.HTMLAttributes<HTMLInputElement>, 'size'>, Omit<VariantProps<typeof chipVariants>, 'variant'>, VariantProps<typeof textFieldVariants> {
    icon?: IconComponent;
    iconProps?: Omit<React.ComponentProps<'svg'>, 'width' | 'height'>;
    onValueChange(values: string[]): void;
    values: string[];
    mutateValue?(string: string): string;
    delimiters?: string[];
    maxValues?: number;
}
declare const ChipInput: FC<ChipInputProps>;
export { ChipInput };
//# sourceMappingURL=chip-input.d.ts.map