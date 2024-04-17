import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { RadioGroup } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/20/solid';
import { useSlippageTolerance } from '@sushiswap/hooks';
import classNames from 'classnames';
import { useCallback } from 'react';
import { Collapsible } from '../animation';
import { CardDescription, CardHeader, CardTitle } from '../card';
import { HoverCard, HoverCardContent, HoverCardPrimitive, HoverCardTrigger, } from '../hover-card';
import { Label } from '../label';
import { Separator } from '../separator';
import { Switch } from '../switch';
import { TextField } from '../text-field';
import { Toggle } from '../toggle';
import { typographyVariants } from '../typography';
const TABS = ['0.1', '0.5', '1.0'];
export const SlippageTolerance = ({ options, className, showAutoSelector = true }) => {
    const [slippageTolerance, setSlippageTolerance] = useSlippageTolerance(options === null || options === void 0 ? void 0 : options.storageKey);
    const onChange = useCallback((value) => {
        setSlippageTolerance(value);
    }, [setSlippageTolerance]);
    const isDangerous = (!Number.isNaN(+slippageTolerance) && +slippageTolerance >= 1.3) ||
        (!Number.isNaN(+slippageTolerance) &&
            +slippageTolerance <= 0.1 &&
            +slippageTolerance > 0);
    return (_jsx(HoverCard, { openDelay: 0, closeDelay: 0, children: _jsxs("div", { className: classNames(className, 'p-4 rounded-lg'), children: [showAutoSelector ? (_jsxs(_Fragment, { children: [_jsxs("div", { className: "flex justify-between items-center gap-4", children: [_jsxs("div", { className: "flex flex-col gap-2", children: [_jsx(Label, { children: "Automatic Slippage Tolerance" }), _jsxs("span", { className: typographyVariants({
                                                variant: 'muted',
                                                className: 'text-sm',
                                            }), children: ["Turn off automatic slippage tolerance ", _jsx("br", {}), " to adjust the value."] })] }), _jsx(Switch, { checked: slippageTolerance === 'AUTO', onCheckedChange: (checked) => setSlippageTolerance(checked ? 'AUTO' : '0.5') })] }), _jsx("div", { className: "my-4 h-px w-full dark:bg-slate-200/5 bg-gray-900/5" })] })) : null, _jsxs("div", { className: "flex justify-between gap-[60px]", children: [_jsxs("div", { className: "flex flex-col gap-2", children: [_jsxs(Label, { className: "flex items-center gap-1", children: [(options === null || options === void 0 ? void 0 : options.title) || 'Slippage', ' ', _jsx(HoverCardTrigger, { children: _jsx(InformationCircleIcon, { width: 16, height: 16 }) }), _jsx(HoverCardPrimitive.Portal, { children: _jsx(HoverCardContent, { className: "!p-0 max-w-[320px] z-[1080]", children: _jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Slippage" }), _jsxs(CardDescription, { className: "prose", children: [_jsx("p", { children: "Slippage is the difference between the expected value of output from a trade and the actual value due to asset volatility and liquidity depth. If the actual slippage falls outside of the user-designated range, the transaction will revert." }), _jsx("a", { className: "text-blue hover:underline", target: "_blank", href: "https://www.sushi.com/academy/articles/what-is-slippage-price-impact", rel: "noreferrer", children: "Learn more" })] })] }) }) })] }), _jsx("span", { className: "text-sm text-red mb-2", children: +slippageTolerance <= 0.1 && +slippageTolerance > 0
                                        ? 'Your transaction may be reverted due to low slippage tolerance'
                                        : isDangerous
                                            ? 'Your transaction may be frontrun due to high slippage tolerance'
                                            : undefined })] }), _jsx("span", { className: classNames(isDangerous ? '!text-red' : 'dark:text-slate-400 text-gray-600', 'text-sm font-semibold'), children: slippageTolerance === 'AUTO' ? '0.5%' : `${slippageTolerance}%` })] }), _jsx(Collapsible, { open: slippageTolerance !== 'AUTO', children: _jsxs("div", { className: "flex gap-1 items-center border border-accent rounded-xl bg-secondary p-0.5", children: [_jsx(RadioGroup, { value: slippageTolerance, onChange: onChange, children: _jsx("div", { className: "flex gap-1 items-center", children: TABS.map((tab, i) => (_jsxs(RadioGroup.Option, { className: "h-[40px]", value: tab, as: Toggle, size: "sm", pressed: slippageTolerance === tab, children: [tab, "%"] }, i))) }) }), _jsx(Separator, { orientation: "vertical", className: "min-h-[36px]" }), _jsx(TextField, { type: "number", value: slippageTolerance, onValueChange: setSlippageTolerance, placeholder: "Custom", id: "slippage-tolerance", maxDecimals: 1, unit: "%" })] }) })] }) }));
};
//# sourceMappingURL=SlippageTolerance.js.map