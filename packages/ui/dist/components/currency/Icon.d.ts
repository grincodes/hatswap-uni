import { ImageProps } from 'next/image';
import { FC } from 'react';
import { Currency } from 'sushi/currency';
export interface IconProps extends Omit<ImageProps, 'src' | 'alt'> {
    currency: Currency;
    disableLink?: boolean;
}
export declare const Icon: FC<IconProps>;
//# sourceMappingURL=Icon.d.ts.map