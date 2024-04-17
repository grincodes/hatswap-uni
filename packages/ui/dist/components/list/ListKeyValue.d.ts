import { FC, ReactNode } from 'react';
export type ListKeyValueProps = {
    title: ReactNode;
    subtitle?: string;
    children: ReactNode;
    skeleton?: never;
    flex?: boolean;
    className?: string;
} | {
    title?: never;
    subtitle?: boolean;
    children?: never;
    skeleton?: boolean;
    flex?: boolean;
    className?: string;
};
export declare const ListKeyValue: FC<ListKeyValueProps>;
//# sourceMappingURL=ListKeyValue.d.ts.map