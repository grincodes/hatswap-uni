'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';
import classNames from 'classnames';
import { Button } from './button';
import { LinkInternal } from './link';
const Params = () => {
    const searchParams = useSearchParams();
    return searchParams.toString().length !== 0 ? (_jsxs("div", { className: "px-2 text-gray-500", children: [_jsx("span", { children: "?" }), Array.from(searchParams.entries()).map(([key, value], index) => {
                return (_jsxs(React.Fragment, { children: [index !== 0 ? _jsx("span", { children: "&" }) : null, _jsxs("span", { className: "px-1", children: [_jsx("span", { className: "animate-[highlight_1s_ease-in-out_1] text-gray-100", children: key }, key), _jsx("span", { children: "=" }), _jsx("span", { className: "animate-[highlight_1s_ease-in-out_1] text-gray-100", children: value }, value)] })] }, key));
            })] })) : null;
};
export const Breadcrumb = () => {
    const pathname = usePathname();
    const items = pathname.split('/').slice(2);
    return (_jsxs("div", { className: "flex gap-x-1.5 items-center text-sm py-4", children: [_jsx(Button, { variant: "link", size: "sm", className: classNames('!font-normal hover:underline', pathname.split('/').length === 2
                    ? '!text-gray-900 dark:!text-slate-50'
                    : '!text-accent-foreground'), children: _jsx(LinkInternal, { href: `/${pathname.split('/')[1]}`, children: "Home" }) }), pathname ? (_jsxs(_Fragment, { children: [_jsx(ChevronRightIcon, { width: 16, height: 16, className: "text-muted-foreground" }), items.map((segment, i) => {
                        const segments = [...items]
                            .map((s) => s.replace(/%3A/g, ':'))
                            .slice(0, i + 1);
                        return (_jsxs(React.Fragment, { children: [_jsx(Button, { variant: "link", size: "sm", className: classNames('hover:underline !inline font-normal capitalize whitespace-nowrap max-w-[120px] truncate', i < items.length - 1
                                        ? '!font-normal !text-muted-foreground'
                                        : '!font-medium !text-gray-900 dark:!text-slate-50'), children: _jsx(LinkInternal, { href: `/pool/${segments.join('/')}`, children: segment.replace(/%3A/g, ':') }) }, segment), i < items.length - 1 ? (_jsx(ChevronRightIcon, { width: 16, height: 16, className: "text-muted-foreground" })) : null] }, segment));
                    })] })) : null, _jsx(Suspense, { children: _jsx(Params, {}) })] }));
};
//# sourceMappingURL=breadcrumb.js.map