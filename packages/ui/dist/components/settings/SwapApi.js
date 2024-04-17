'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocalStorage } from '@sushiswap/hooks';
import { Label } from '../label';
import { Switch } from '../switch';
import { typographyVariants } from '../typography';
export const SwapApi = () => {
    const [swapApi, setSwapApi] = useLocalStorage('swapApi', true);
    return (_jsx("div", { className: "p-4 rounded-lg", children: _jsxs("div", { className: "flex justify-between items-center gap-4", children: [_jsxs("div", { className: "flex flex-col gap-2", children: [_jsx(Label, { children: "Swap API" }), _jsx("span", { className: typographyVariants({
                                variant: 'muted',
                                className: 'text-sm',
                            }), children: "Switch to the client for trade discovery by deactivating the Swap API." })] }), _jsx(Switch, { checked: swapApi, onCheckedChange: (checked) => setSwapApi(checked) })] }) }));
};
//# sourceMappingURL=SwapApi.js.map