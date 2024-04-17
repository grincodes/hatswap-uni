import { ImageProps } from 'next/image';
import { FC } from 'react';
import { IconProps } from './Icon';
import { IconListProps } from './IconList';
import { ListComponent } from './List';
type Currency = {
    List: ListComponent;
    Icon: FC<IconProps>;
    IconList: FC<IconListProps>;
} & Omit<ImageProps, 'src' | 'alt'>;
export declare const Currency: Currency;
export {};
//# sourceMappingURL=index.d.ts.map