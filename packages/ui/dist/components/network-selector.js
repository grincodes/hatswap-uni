'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { Chain, ChainId } from 'sushi/chain';
import Link from 'next/link';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, } from './command';
import { AptosCircle, NetworkIcon } from './icons';
import { Popover, PopoverContent, PopoverPrimitive } from './popover';
const PREFERRED_CHAINID_ORDER = [
    ChainId.ETHEREUM,
    ChainId.ARBITRUM,
    ChainId.BASE,
    ChainId.POLYGON,
    ChainId.POLYGON_ZKEVM,
    ChainId.SCROLL,
    ChainId.OPTIMISM,
    ChainId.LINEA,
    ChainId.BLAST,
    ChainId.ZETACHAIN,
    ChainId.CORE,
    ChainId.FILECOIN,
    ChainId.BSC,
    ChainId.THUNDERCORE,
    ChainId.GNOSIS,
    ChainId.AVALANCHE,
    ChainId.FANTOM,
    ChainId.ARBITRUM_NOVA,
    ChainId.HARMONY,
];
const NEW_CHAINS = [
    ChainId.BLAST,
    ChainId.ZETACHAIN,
];
const NetworkSelector = ({ showAptos = false, onSelect, networks = [], children, }) => {
    const [open, setOpen] = useState(false);
    const _networks = useMemo(() => {
        const INCLUDED_PREFERRED_CHAIN_IDS = PREFERRED_CHAINID_ORDER.filter((el) => networks.includes(el));
        return Array.from(new Set([...INCLUDED_PREFERRED_CHAIN_IDS, ...networks]));
    }, [networks]);
    return (_jsxs(Popover, { modal: true, open: open, onOpenChange: setOpen, children: [_jsx(PopoverPrimitive.Trigger, { asChild: true, children: children }), _jsx(PopoverContent, { className: "!w-60 !p-0 !overflow-x-hidden !overflow-y-scroll scroll", children: _jsxs(Command, { children: [_jsx(CommandInput, { "testdata-id": "network-selector-input", placeholder: "Search network" }), _jsx(CommandEmpty, { children: "No network found." }), _jsxs(CommandGroup, { children: [showAptos ? (_jsx(Link, { href: "https://aptos.sushi.com", rel: "noopener noreferrer", target: "_blank", children: _jsx(CommandItem, { className: "cursor-pointer", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(AptosCircle, { width: 22, height: 22 }), "Aptos", _jsx("div", { className: "text-[10px] italic rounded-full px-[6px] bg-gradient-to-r from-blue to-pink text-white font-bold", children: "NEW" })] }) }) })) : null, _networks.map((el) => {
                                    var _a, _b, _c;
                                    return (_jsx(CommandItem, { className: "cursor-pointer", "testdata-id": `network-selector-${el}`, value: `${(_a = Chain.from(el)) === null || _a === void 0 ? void 0 : _a.name}__${el}`, onSelect: (value) => onSelect(+value.split('__')[1], () => setOpen(false)), children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(NetworkIcon, { chainId: el, width: 22, height: 22 }), NEW_CHAINS.includes(el) ? (_jsxs(_Fragment, { children: [(_b = Chain.from(el)) === null || _b === void 0 ? void 0 : _b.name, _jsx("div", { className: "text-[10px] italic rounded-full px-[6px] bg-gradient-to-r from-blue to-pink text-white font-bold", children: "NEW" })] })) : ((_c = Chain.from(el)) === null || _c === void 0 ? void 0 : _c.name)] }) }, el));
                                })] })] }) })] }));
};
export { NetworkSelector };
//# sourceMappingURL=network-selector.js.map