/// <reference types="react" />
import { Table } from '@tanstack/react-table';
interface DataTableToolbarProps<TData> {
    table: Table<TData>;
    children: React.ReactNode;
}
export declare function DataTableToolbar<TData>({ table, children, }: DataTableToolbarProps<TData>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=data-table-toolbar.d.ts.map