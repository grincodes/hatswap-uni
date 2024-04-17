import { ColumnDef, OnChangeFn, PaginationState, Row, RowData, SortingState, type Table as TableType, TableState } from '@tanstack/react-table';
import { ReactNode, default as React } from 'react';
declare module '@tanstack/react-table' {
    interface ColumnMeta<TData extends RowData, TValue> {
        className?: string;
        skeleton?: React.ReactNode;
        headerDescription?: string;
        disableLink?: boolean;
    }
}
interface DataTableProps<TData, TValue> {
    testId?: string | ((value: TData, index: number) => string);
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    toolbar?: (table: TableType<TData>) => ReactNode;
    pagination?: boolean;
    loading: boolean;
    linkFormatter?: (value: TData) => string;
    externalLink?: boolean;
    state?: Partial<TableState>;
    onSortingChange?: OnChangeFn<SortingState>;
    onPaginationChange?: OnChangeFn<PaginationState>;
    rowRenderer?: (row: Row<TData>, value: ReactNode) => ReactNode;
}
export declare function DataTable<TData, TValue>({ testId, columns, data, toolbar, pagination, loading, linkFormatter, externalLink, state, onSortingChange, onPaginationChange, rowRenderer, }: DataTableProps<TData, TValue>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=data-table.d.ts.map