'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { flexRender, getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, } from '@tanstack/react-table';
import { default as React } from 'react';
import classNames from 'classnames';
import { Table, TableBody, TableCell, TableCellAsLink, TableHead, TableHeader, TableRow, } from '../table';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTablePagination } from './data-table-pagination';
export function DataTable({ testId, columns, data, toolbar, pagination = false, loading, linkFormatter, externalLink = false, state, onSortingChange, onPaginationChange, rowRenderer, }) {
    var _a;
    const [rowSelection, setRowSelection] = React.useState({});
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [sorting, setSorting] = React.useState([]);
    const table = useReactTable({
        data,
        columns,
        state: Object.assign({ rowSelection,
            columnFilters, columnVisibility: (state === null || state === void 0 ? void 0 : state.columnVisibility)
                ? state.columnVisibility
                : columnVisibility, sorting: (state === null || state === void 0 ? void 0 : state.sorting) ? state.sorting : sorting }, ((state === null || state === void 0 ? void 0 : state.pagination) && { pagination: state === null || state === void 0 ? void 0 : state.pagination })),
        autoResetPageIndex: false,
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: onSortingChange ? onSortingChange : setSorting,
        onPaginationChange: onPaginationChange,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    });
    return (_jsxs("div", { className: "space-y-4 border-t border-secondary", children: [toolbar ? toolbar(table) : null, _jsxs(Table, { className: pagination ? 'border-b border-secondary' : '', children: [_jsx(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => (_jsx(TableRow, { children: headerGroup.headers.map((header) => {
                                var _a, _b;
                                return (_jsx(TableHead, { style: { width: header.getSize() }, className: classNames(header.column.getCanSort() ? 'px-2' : 'px-4'), children: header.isPlaceholder ? null : (_jsx(DataTableColumnHeader, { description: (_b = (_a = header.column.columnDef) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.headerDescription, column: header.column, title: header.column.columnDef.header })) }, header.id));
                            }) }, headerGroup.id))) }), _jsx(TableBody, { children: loading ? (Array.from({ length: 3 })
                            .fill(null)
                            .map((_, i) => (_jsx(TableRow, { "testdata-id": "table-rows-loading", children: table.getVisibleFlatColumns().map((column, _i) => {
                                var _a;
                                return (_jsx(TableCell, { style: { width: column.getSize() }, children: (_a = column.columnDef.meta) === null || _a === void 0 ? void 0 : _a.skeleton }, column.id));
                            }) }, i)))) : ((_a = table.getRowModel().rows) === null || _a === void 0 ? void 0 : _a.length) ? (table.getRowModel().rows.map((row, r) => {
                            const _row = (_jsx(TableRow, { "data-state": row.getIsSelected() && 'selected', "testdata-id": typeof testId === 'function'
                                    ? testId(row.original, r)
                                    : `${testId}-${r}-tr`, children: row.getVisibleCells().map((cell, i) => {
                                    var _a;
                                    return linkFormatter &&
                                        !((_a = cell.column.columnDef.meta) === null || _a === void 0 ? void 0 : _a.disableLink) ? (_jsx(TableCellAsLink, { style: { width: cell.column.getSize() }, href: linkFormatter(row.original), external: externalLink, "testdata-id": `${testId}-${r}-${i}-td`, children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) : (_jsx(TableCell, { style: { width: cell.column.getSize() }, "testdata-id": `${testId}-${r}-${i}-td`, children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id));
                                }) }, r));
                            if (rowRenderer)
                                return rowRenderer(row, _row);
                            return _row;
                        })) : (_jsx(TableRow, { children: _jsx(TableCell, { "testdata-id": "table-no-results", colSpan: columns.length, className: "h-24 text-center", children: "No results." }) })) })] }), pagination ? (_jsx("div", { className: "px-6 pb-6", children: _jsx(DataTablePagination, { table: table }) })) : null] }));
}
//# sourceMappingURL=data-table.js.map