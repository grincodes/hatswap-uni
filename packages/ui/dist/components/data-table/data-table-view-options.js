'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Button } from '../button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, } from '../dropdown-menu';
export function DataTableViewOptions({ table, }) {
    return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { icon: AdjustmentsHorizontalIcon, variant: "secondary", children: "View" }) }), _jsxs(DropdownMenuContent, { align: "end", className: "w-[150px]", children: [_jsx(DropdownMenuLabel, { children: "Toggle columns" }), _jsx(DropdownMenuSeparator, {}), table
                        .getAllColumns()
                        .filter((column) => typeof column.accessorFn !== 'undefined' && column.getCanHide())
                        .map((column) => {
                        return (_jsx(DropdownMenuCheckboxItem, { className: "capitalize", checked: column.getIsVisible(), onCheckedChange: (value) => column.toggleVisibility(!!value), children: column.id }, column.id));
                    })] })] }));
}
//# sourceMappingURL=data-table-view-options.js.map