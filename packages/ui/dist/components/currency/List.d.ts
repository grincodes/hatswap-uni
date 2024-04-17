import React, { FC } from 'react';
export interface ListProps<TData> {
    className?: string;
    rowHeight?: number;
    rowRenderer: FC<TData>;
    rowData: TData[];
}
export type ListComponent = <TData>(props: ListProps<TData>) => React.ReactElement | null;
export declare function List<TData>({ className, rowHeight, rowData, rowRenderer: RowComponent, }: ListProps<TData>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=List.d.ts.map