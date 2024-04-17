/// <reference types="react" />
import { Column } from '@tanstack/react-table';
interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>;
    title: string;
    description?: string;
}
export declare function DataTableColumnHeader<TData, TValue>({ column, title, className, description, }: DataTableColumnHeaderProps<TData, TValue>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=data-table-column-header.d.ts.map