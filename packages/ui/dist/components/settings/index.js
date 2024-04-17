'use client';
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSlippageTolerance } from '@sushiswap/hooks';
import { useState } from 'react';
import { Button } from '../button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from '../dialog';
import { List } from '../list';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from '../tooltip';
import { CarbonOffset } from './CarbonOffset';
import { ExpertMode } from './ExpertMode';
import { SlippageTolerance } from './SlippageTolerance';
import { SwapApi } from './SwapApi';
export var SettingsModule;
(function (SettingsModule) {
    SettingsModule["CarbonOffset"] = "CarbonOffset";
    SettingsModule["CustomTokens"] = "CustomTokens";
    SettingsModule["SlippageTolerance"] = "SlippageTolerance";
    SettingsModule["ExpertMode"] = "ExpertMode";
    SettingsModule["SwapApi"] = "SwapApi";
})(SettingsModule || (SettingsModule = {}));
export const SettingsOverlay = ({ modules, children, options, }) => {
    var _a;
    const [_open, setOpen] = useState(false);
    const [slippageTolerance, setSlippageTolerance] = useSlippageTolerance((_a = options === null || options === void 0 ? void 0 : options.slippageTolerance) === null || _a === void 0 ? void 0 : _a.storageKey);
    return (_jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: children ? (children) : (_jsx(Button, { size: "sm", className: "!rounded-full", variant: "secondary", icon: Cog6ToothIcon, onClick: () => setOpen(true), children: Number(slippageTolerance) > 0.5 &&
                        modules.includes(SettingsModule.SlippageTolerance) ? (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { delayDuration: 150, children: [_jsx(TooltipTrigger, { asChild: true, children: _jsxs(Button, { onClick: (e) => {
                                            e.stopPropagation();
                                            setSlippageTolerance('0.5');
                                        }, className: "!rounded-full -mr-1.5 !bg-opacity-50", iconPosition: "end", variant: Number(slippageTolerance) > 2 ? 'warning' : 'secondary', size: "xs", asChild: true, icon: XMarkIcon, children: [slippageTolerance, "%"] }) }), _jsx(TooltipContent, { children: "Reset slippage tolerance" })] }) })) : null })) }), _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Settings" }), _jsx(DialogDescription, { children: "Adjust to your personal preferences." })] }), _jsxs("div", { className: "flex flex-col gap-4", children: [modules.includes(SettingsModule.SlippageTolerance) && (_jsx(List, { className: "!pt-0", children: _jsx(List.Control, { children: _jsx(SlippageTolerance, { options: options === null || options === void 0 ? void 0 : options.slippageTolerance }) }) })), modules.length > 1 && (_jsx(List, { className: "!pt-0", children: _jsxs(List.Control, { children: [modules.includes(SettingsModule.ExpertMode) && _jsx(ExpertMode, {}), modules.includes(SettingsModule.CarbonOffset) && (_jsx(CarbonOffset, {}))] }) })), modules.includes(SettingsModule.SwapApi) && (_jsx(List, { className: "!pt-0", children: _jsx(List.Control, { children: _jsx(SwapApi, {}) }) }))] })] })] }));
};
//# sourceMappingURL=index.js.map