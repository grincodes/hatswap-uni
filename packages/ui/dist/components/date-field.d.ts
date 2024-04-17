import { type VariantProps } from 'class-variance-authority';
import { FC } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import { textFieldVariants } from './text-field';
interface DateFieldProps extends ReactDatePickerProps, VariantProps<typeof textFieldVariants> {
    testId?: string;
}
declare const DateField: FC<DateFieldProps>;
export { DateField };
//# sourceMappingURL=date-field.d.ts.map