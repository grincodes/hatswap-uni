var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import Link from 'next/link';
import * as React from 'react';
import classNames from 'classnames';
const Table = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", { className: "w-full overflow-auto", children: _jsx("table", Object.assign({ ref: ref, className: classNames('w-full caption-bottom text-sm', className) }, props)) }));
});
Table.displayName = 'Table';
const TableHeader = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("thead", Object.assign({ ref: ref, className: classNames('[&_tr]:border-b', className) }, props)));
});
TableHeader.displayName = 'TableHeader';
const TableBody = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("tbody", Object.assign({ ref: ref, className: classNames('[&_tr:last-child]:border-0', className) }, props)));
});
TableBody.displayName = 'TableBody';
const TableFooter = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("tfoot", Object.assign({ ref: ref, className: classNames('bg-primary font-medium text-primary-foreground', className) }, props)));
});
TableFooter.displayName = 'TableFooter';
const TableRow = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("tr", Object.assign({ ref: ref, className: classNames('border-b border-secondary transition-colors hover:bg-secondary hover:bg-opacity-50 data-[state=selected]:bg-secondary', className) }, props)));
});
TableRow.displayName = 'TableRow';
const TableHead = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("th", Object.assign({ ref: ref, className: classNames('h-12 px-2 whitespace-nowrap text-left align-middle text-xs font-semibold text-muted-foreground [&:has([role=checkbox])]:pr-0', className) }, props)));
});
TableHead.displayName = 'TableHead';
const TableCell = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("td", Object.assign({ ref: ref, className: classNames('h-[76px] relative text-sm font-medium p-4 align-middle [&:has([role=checkbox])]:pr-0', className) }, props)));
});
TableCell.displayName = 'TableCell';
const TableCellAsLink = React.forwardRef((_a, ref) => {
    var { external, className, children, href } = _a, props = __rest(_a, ["external", "className", "children", "href"]);
    return (_jsx("td", Object.assign({ className: "!p-0 h-[76px]", ref: ref }, props, { children: _jsx(Link, { scroll: false, shallow: true, href: href, target: external ? '_blank' : '_self', className: classNames('flex items-center text-sm font-medium p-4 align-middle [&:has([role=checkbox])]:pr-0', className), children: children }) })));
});
TableCellAsLink.displayName = 'TableCellAsLink';
const TableCaption = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("caption", Object.assign({ ref: ref, className: classNames('mt-4 text-sm text-muted-foreground', className) }, props)));
});
TableCaption.displayName = 'TableCaption';
export { Table, TableBody, TableCaption, TableCell, TableCellAsLink, TableFooter, TableHead, TableHeader, TableRow, };
//# sourceMappingURL=table.js.map