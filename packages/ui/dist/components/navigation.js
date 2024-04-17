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
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import * as React from 'react';
import classNames from 'classnames';
import { SushiIcon } from './icons/SushiIcon';
import { navigationMenuTriggerStyle } from './navigation-menu';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, } from './navigation-menu';
import { OnramperButton } from './onramper';
const EXPLORE_NAVIGATION_LINKS = [
    {
        title: 'Swap',
        href: '/swap',
        description: 'The easiest way to trade.',
    },
    {
        title: 'Pools',
        href: '/pools',
        description: 'Earn fees by providing liquidity.',
    },
    {
        title: 'Bonds',
        href: '/bonds',
        description: 'Acquire vested tokens at a discount.',
    },
    {
        title: 'Stake',
        href: '/stake',
        description: 'Earn protocol fees by staking SUSHI.',
    },
    {
        title: 'Pay',
        href: '/furo',
        description: 'Automate salaries and vesting schedules.',
    },
    {
        title: 'Analytics',
        href: '/analytics',
        description: 'Find the best opportunities',
    },
    {
        title: 'Blog',
        href: '/blog',
        description: 'Stay up to date with the latest product developments at Sushi.',
    },
    {
        title: 'Academy',
        href: '/academy',
        description: 'Everything you need to get up to speed with DeFi.',
    },
    {
        title: 'Partner with Sushi',
        href: '/partner',
        description: 'Incentivize your token with Sushi rewards.',
    },
    {
        title: 'List enquiry',
        href: '/tokenlist-request',
        description: 'Get your token on our default token list.',
    },
];
const TOOLS_NAVIGATION_LINKS = [
    {
        title: 'Analytics',
        href: '/analytics',
        description: 'Find the best opportunities',
    },
    {
        title: 'Blog',
        href: '/blog',
        description: 'Stay up to date with the latest product developments at Sushi.',
    },
    {
        title: 'Academy',
        href: '/academy',
        description: 'Everything you need to get up to speed with DeFi.',
    },
    {
        title: 'Forum & Proposals',
        href: 'https://forum.sushi.com',
        description: 'View and discuss proposals for SushiSwap.',
    },
    {
        title: 'Participate',
        href: 'https://snapshot.org/#/sushigov.eth',
        description: 'As a Sushi holder, you can vote on proposals to shape the future of SushiSwap.',
    },
];
const PARTNER_NAVIGATION_LINKS = [
    {
        title: 'Partner with Sushi',
        href: '/partner',
        description: 'Incentivize your token with Sushi rewards.',
    },
    {
        title: 'List enquiry',
        href: '/tokenlist-request',
        description: 'Get your token on our default token list.',
    },
];
const navigationContainerVariants = cva('px-4 sticky flex items-center flex-grow gap-4 top-0 z-50 min-h-[56px] max-h-[56px] h-[56px]', {
    variants: {
        variant: {
            default: 'bg-gray-100 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800',
            transparent: '',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
const NavigationContainer = ({ children, variant, }) => {
    return (_jsxs("div", { className: navigationContainerVariants({ variant }), children: [_jsx(SushiIcon, { width: 24, height: 24 }), _jsx("div", { className: "flex items-center justify-between flex-grow gap-4", children: children })] }));
};
const Navigation = ({ rightElement, variant, legacyBehavior = false, }) => {
    return (_jsxs(NavigationContainer, { variant: variant, children: [_jsx(NavigationMenu, { children: _jsxs(NavigationMenuList, { children: [_jsxs(NavigationMenuItem, { className: "block lg:hidden", children: [_jsx(NavigationMenuTrigger, { children: "Explore" }), _jsx(NavigationMenuContent, { children: _jsxs("ul", { className: "min-w-[240px] gap-3 p-4", children: [EXPLORE_NAVIGATION_LINKS.map((component) => (_jsx(NavigationListItem, { title: component.title, href: component.href, children: component.description }, component.title))), _jsx(OnramperButton, { children: _jsx(NavigationListItem, { title: "Buy Crypto", children: "Need to buy some more crypto?" }) })] }) })] }), _jsx(NavigationMenuItem, { className: "hidden lg:block", children: legacyBehavior ? (_jsx(NavigationMenuLink, { asChild: true, className: navigationMenuTriggerStyle(), children: _jsx("a", { href: "/swap", children: "Swap" }) })) : (_jsx(NavigationMenuLink, { href: "/swap", className: navigationMenuTriggerStyle(), children: "Swap" })) }), _jsx(NavigationMenuItem, { className: "hidden lg:block", children: legacyBehavior ? (_jsx(NavigationMenuLink, { asChild: true, className: navigationMenuTriggerStyle(), children: _jsx("a", { href: "/pools", children: "Pools" }) })) : (_jsx(NavigationMenuLink, { href: "/pools", className: navigationMenuTriggerStyle(), children: "Pools" })) }), _jsx(NavigationMenuItem, { className: "hidden lg:block", children: legacyBehavior ? (_jsx(NavigationMenuLink, { asChild: true, className: navigationMenuTriggerStyle(), children: _jsx("a", { href: "/bonds", children: "Bonds" }) })) : (_jsx(NavigationMenuLink, { href: "/bonds", className: navigationMenuTriggerStyle(), children: "Bonds" })) }), _jsx(NavigationMenuItem, { className: "hidden lg:block", children: legacyBehavior ? (_jsx(NavigationMenuLink, { asChild: true, className: navigationMenuTriggerStyle(), children: _jsx("a", { href: "/stake", children: "Stake" }) })) : (_jsx(NavigationMenuLink, { href: "/stake", className: navigationMenuTriggerStyle(), children: "Stake" })) }), _jsx(NavigationMenuItem, { className: "hidden lg:block", children: legacyBehavior ? (_jsx(NavigationMenuLink, { asChild: true, className: navigationMenuTriggerStyle(), children: _jsx("a", { href: "/furo", children: "Pay" }) })) : (_jsx(NavigationMenuLink, { href: "/furo", className: navigationMenuTriggerStyle(), children: "Pay" })) }), _jsxs(NavigationMenuItem, { className: "hidden lg:block", children: [_jsx(NavigationMenuTrigger, { children: "More" }), _jsx(NavigationMenuContent, { children: _jsx("ul", { className: "w-[400px] gap-3 p-4", children: TOOLS_NAVIGATION_LINKS.map((component) => (_jsx(NavigationListItem, { title: component.title, href: component.href, legacyBehavior: legacyBehavior, children: component.description }, component.title))) }) })] }), _jsxs(NavigationMenuItem, { className: "hidden lg:block", children: [_jsx(NavigationMenuTrigger, { children: "Partners" }), _jsx(NavigationMenuContent, { children: _jsx("ul", { className: "w-[400px] gap-3 p-4", children: PARTNER_NAVIGATION_LINKS.map((component) => (_jsx(NavigationListItem, { title: component.title, href: component.href, legacyBehavior: legacyBehavior, children: component.description }, component.title))) }) })] }), _jsx(NavigationMenuItem, { className: "hidden lg:block", children: _jsx(OnramperButton, { children: _jsx(NavigationMenuLink, { className: navigationMenuTriggerStyle(), children: "Buy Crypto" }) }) })] }) }), _jsx("div", { className: "flex items-center gap-2", children: rightElement ? rightElement : null })] }));
};
const NavigationListItem = React.forwardRef((_a, ref) => {
    var { className, title, children, legacyBehavior = false, href } = _a, props = __rest(_a, ["className", "title", "children", "legacyBehavior", "href"]);
    return (_jsx("li", { children: _jsx(NavigationMenuLink, { asChild: true, children: legacyBehavior || !href ? (_jsxs("a", Object.assign({ ref: ref, className: classNames('cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground', className), href: href }, props, { children: [_jsx("div", { className: "text-sm font-medium leading-none", children: title }), _jsx("p", { className: "text-sm leading-snug line-clamp-2 text-muted-foreground", children: children })] }))) : (_jsxs(Link, { href: href, className: classNames('cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground', className), children: [_jsx("div", { className: "text-sm font-medium leading-none", children: title }), _jsx("p", { className: "text-sm leading-snug line-clamp-2 text-muted-foreground", children: children })] })) }) }));
});
NavigationListItem.displayName = 'NavListItem';
export { EXPLORE_NAVIGATION_LINKS, Navigation, NavigationContainer, NavigationListItem, PARTNER_NAVIGATION_LINKS, TOOLS_NAVIGATION_LINKS, };
//# sourceMappingURL=navigation.js.map