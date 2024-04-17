import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InformationCircleIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from './tooltip';
export const Explainer = ({ icon: Icon, iconProps, children }) => {
    return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { delayDuration: 0, children: [_jsx(TooltipTrigger, { asChild: true, children: Icon ? (_jsx(Icon, Object.assign({ className: classNames(iconProps === null || iconProps === void 0 ? void 0 : iconProps.className, 'self-center') }, iconProps))) : (_jsx(InformationCircleIcon, { width: 16, height: 16, className: classNames(iconProps === null || iconProps === void 0 ? void 0 : iconProps.className, 'self-center text-muted-foreground') })) }), _jsx(TooltipContent, { className: "bg-background !p-4 shadow-xl w-80", children: children })] }) }));
};
//# sourceMappingURL=explainer.js.map