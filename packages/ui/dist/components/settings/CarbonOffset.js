'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocalStorage } from '@sushiswap/hooks';
import { ChainId } from 'sushi/chain';
import { NetworkIcon } from '../icons/NetworkIcon';
import { Label } from '../label';
import { Switch } from '../switch';
import { typographyVariants } from '../typography';
export const CarbonOffset = () => {
    const [carbonOffset, setCarbonOffset] = useLocalStorage('carbonOffset', false);
    return (_jsxs("div", { className: "p-4 rounded-lg", children: [_jsxs("div", { className: "flex justify-between items-center gap-4", children: [_jsxs("div", { className: "flex flex-col gap-2", children: [_jsx(Label, { children: "Carbon Offset" }), _jsx("span", { className: typographyVariants({
                                    variant: 'muted',
                                    className: 'text-sm',
                                }), children: "Make transactions climate positive by offsetting them with Klima Infinity. The average cost to offset a transaction on Polygon is less than $0.01." })] }), _jsx(Switch, { checked: carbonOffset, onCheckedChange: (checked) => setCarbonOffset(checked) })] }), _jsxs("span", { className: "mt-3 text-xs text-gray-500 dark:text-slate-400 items-center flex font-medium gap-0.5", children: ["Only available on", ' ', _jsx(NetworkIcon, { type: "naked", chainId: ChainId.POLYGON, width: 16, height: 16 }), ' ', "Polygon"] })] }));
};
//# sourceMappingURL=CarbonOffset.js.map