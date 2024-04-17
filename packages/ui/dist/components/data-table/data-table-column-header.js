'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CaretDownIcon, CaretSortIcon, CaretUpIcon, } from '@radix-ui/react-icons';
import { useCallback } from 'react';
import classNames from 'classnames';
import { Button } from '../button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from '../tooltip';
export function DataTableColumnHeader({ column, title, className, description, }) {
    const onClick = useCallback(() => {
        if (column.getIsSorted() === false) {
            // desc
            column.toggleSorting(true);
        }
        if (column.getIsSorted() === 'desc') {
            // asc
            column.toggleSorting(false);
        }
        if (column.getIsSorted() === 'asc') {
            // clear
            column.clearSorting();
        }
    }, [column]);
    // When the header (=title) is undefined, it becomes a function, can't render functions...
    if (typeof title !== 'string') {
        title = '';
    }
    if (!column.getCanSort()) {
        return (_jsx("div", { className: classNames(className), children: description ? (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx("span", { className: "underline decoration-dotted underline-offset-2", children: title }) }), _jsx(TooltipContent, { children: description })] }) })) : (_jsx("span", { children: title })) }));
    }
    return (_jsx("div", { className: classNames('flex items-center space-x-2', className), children: description ? (_jsx(Button, { onClick: onClick, variant: "ghost", size: "xs", children: _jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsxs("div", { className: "flex flex-row gap-2 ui-items-center", children: [_jsx("span", { className: "underline decoration-dotted underline-offset-2", children: title }), column.getIsSorted() === 'desc' ? (_jsx(CaretDownIcon, { className: "ml-2 h-4 w-4" })) : column.getIsSorted() === 'asc' ? (_jsx(CaretUpIcon, { className: "ml-2 h-4 w-4" })) : (_jsx(CaretSortIcon, { className: "ml-2 h-4 w-4" }))] }) }), _jsx(TooltipContent, { children: description })] }) }) })) : (_jsxs(Button, { onClick: onClick, variant: "ghost", size: "xs", children: [_jsx("span", { children: title }), column.getIsSorted() === 'desc' ? (_jsx(CaretDownIcon, { className: "ml-2 h-4 w-4" })) : column.getIsSorted() === 'asc' ? (_jsx(CaretUpIcon, { className: "ml-2 h-4 w-4" })) : (_jsx(CaretSortIcon, { className: "ml-2 h-4 w-4" }))] })) }));
}
//# sourceMappingURL=data-table-column-header.js.map