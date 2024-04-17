'use client';
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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import dynamic from 'next/dynamic';
import { useCallback } from 'react';
import { Container } from './container';
import { DiscordIcon, GithubIcon, InstagramIcon, SushiWithTextIcon, TwitterIcon, } from './icons';
import { LinkExternal } from './link';
const config = {
    Services: {
        Swap: { href: 'https://www.sushi.com/swap' },
        Earn: { href: 'https://www.sushi.com/earn' },
        Payments: { href: 'https://www.sushi.com/furo' },
        Analytics: { href: 'https://www.sushi.com/analytics' },
    },
    Help: {
        Academy: {
            href: 'https://www.sushi.com/academy',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        'About Us': {
            href: 'https://docs.sushi.com',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        'Discord Support': {
            href: 'https://sushi.com/discord',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        'Twitter Support': {
            href: 'https://twitter.com/sushiswap',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        'Forum Support': {
            href: 'https://forum.sushi.com',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
    },
    Developers: {
        GitBook: {
            href: 'https://docs.sushi.com',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        GitHub: {
            href: 'https://github.com/sushiswap',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        Development: {
            href: 'https://dev.sushi.com',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        SushiGuard: {
            href: 'https://docs.openmev.org',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
    },
    Items: [
        {
            Governance: {
                'Forum & Proposals': {
                    href: 'https://forum.sushi.com',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                },
                Vote: {
                    href: 'https://snapshot.org/#/sushigov.eth',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                },
            },
        },
        {
            Partners: {
                KlimaDAO: {
                    href: 'https://www.klimadao.finance/',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                },
                'Manifold Finance': {
                    href: 'https://www.manifoldfinance.com/',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                },
            },
        },
    ],
    Protocol: {
        'Apply for Onsen': {
            href: 'https://docs.google.com/document/d/1VcdrqAn1sR8Wa0BSSU-jAl68CfoECR62LCzIyzUpZ_U',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
    },
};
const Component = (_a) => {
    var { children, maxWidth = '5xl' } = _a, props = __rest(_a, ["children", "maxWidth"]);
    const leafNode = useCallback((title, items) => {
        return (_jsxs("div", { className: "flex flex-col gap-[10px]", children: [_jsx("span", { className: "font-semibold tracking-tighter text-sm sm:text-xs text-gray-900 dark:text-slate-100", children: title }), Object.entries(items).map(([item, { href, rel, target }]) => (_jsx("a", { href: href, target: target, rel: rel, className: "text-sm cursor-pointer sm:text-xs text-gray-600 dark:text-slate-400 hover:underline", children: item }, item)))] }, title));
    }, []);
    return (_jsxs("footer", Object.assign({ className: "bg-secondary hidden sm:flex flex-col pt-[72px]" }, props, { children: [_jsxs(Container, { maxWidth: maxWidth, className: "grid grid-cols-1 md:grid-cols-[176px_auto] mx-auto px-4 gap-4", children: [_jsx("div", { className: "col-span-2", children: children && children }), _jsxs("div", { className: "flex flex-col gap-5", children: [_jsx("div", { className: "flex items-center justify-start gap-3 pt-2", children: _jsx(SushiWithTextIcon, { height: 20, className: "text-gray-700 dark:text-slate-50" }) }), _jsx("p", { className: "text-xs text-gray-600 dark:text-slate-400", children: "Our community is building a comprehensive decentralized trading platform for the future of finance. Join us!" }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(LinkExternal, { href: "https://github.com/sushiswap", children: _jsx(GithubIcon, { width: 16, className: "text-gray-700 hover:text-gray-900 dark:text-slate-300 dark:hover:text-slate-50" }) }), _jsx(LinkExternal, { href: "https://twitter.com/sushiswap", children: _jsx(TwitterIcon, { width: 16, className: "text-gray-700 hover:text-gray-900 dark:text-slate-300 dark:hover:text-slate-50" }) }), _jsx(LinkExternal, { href: "https://instagram.com/instasushiswap", children: _jsx(InstagramIcon, { width: 16, className: "text-gray-700 hover:text-gray-900 dark:text-slate-300 dark:hover:text-slate-50" }) }), _jsx(LinkExternal, { href: "https://sushi.com/discord", children: _jsx(DiscordIcon, { width: 16, className: "text-gray-700 hover:text-gray-900 dark:text-slate-300 dark:hover:text-slate-50" }) })] })] }), _jsx("div", { className: "md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-[40px] sm:mt-[10px]", children: Object.entries(config).map(([title, items], i) => {
                            if (Array.isArray(items)) {
                                return (_jsx("div", { className: "flex flex-col gap-6", children: items.map((item) => Object.entries(item).map(([_title, _items]) => {
                                        return leafNode(_title, _items);
                                    })) }, i));
                            }
                            else {
                                return leafNode(title, items);
                            }
                        }) })] }), _jsx(Container, { maxWidth: maxWidth, className: "mx-auto mt-20 mb-3", children: _jsxs("div", { className: "flex justify-between py-2 mx-4 border-t border-accent", children: [_jsx("span", { className: "text-xs text-gray-600 dark:text-slate-400", children: "Copyright \u00A9 2023 Sushi. All rights reserved." }), _jsx("div", { className: "flex divide-x dark:divide-slate-200/20 gap-", children: _jsx("a", { href: "https://www.sushi.com/terms-of-use", className: "text-xs font-medium px-3 text-gray-600 dark:text-slate-300", children: "Terms of Use" }) })] }) })] })));
};
export const GlobalFooter = dynamic(() => Promise.resolve(Component), {
    ssr: false,
});
//# sourceMappingURL=global-footer.js.map