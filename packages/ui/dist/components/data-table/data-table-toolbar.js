'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Button } from './../button';
import { TextField } from './../text-field';
import { DataTableViewOptions } from './data-table-view-options';
export function DataTableToolbar({ table, children, }) {
    var _a, _b;
    const isFiltered = table.getState().columnFilters.length > 0;
    return (_jsxs("div", { className: "flex items-center justify-between gap-4", children: [_jsxs("div", { className: "flex flex-1 items-center space-x-2", children: [_jsx(TextField, { icon: MagnifyingGlassIcon, type: "text", placeholder: "Filter tasks...", value: (_b = (_a = table.getColumn('title')) === null || _a === void 0 ? void 0 : _a.getFilterValue()) !== null && _b !== void 0 ? _b : '', onChange: (event) => { var _a; return (_a = table.getColumn('title')) === null || _a === void 0 ? void 0 : _a.setFilterValue(event.target.value); } }), children, isFiltered && (_jsxs(Button, { variant: "ghost", onClick: () => table.resetColumnFilters(), className: "h-8 px-2 lg:px-3", children: ["Reset", _jsx(Cross2Icon, { className: "ml-2 h-4 w-4" })] }))] }), _jsx(DataTableViewOptions, { table: table })] }));
}
//# sourceMappingURL=data-table-toolbar.js.map