'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { LightBulbIcon } from '@heroicons/react/24/outline';
import { useLocalStorage } from '@sushiswap/hooks';
import { List } from '../list/List';
import { Switch } from '../switch';
export const ExpertMode = () => {
    const [expertMode, setExpertMode] = useLocalStorage('expertMode', false);
    return (_jsx(List.Item, { className: "!bg-transparent cursor-default", as: "div", icon: LightBulbIcon, iconProps: { className: '!text-red' }, title: "Expert mode", subtitle: "Enabling Expert Mode will allow for high slippage trades. Only use if you are an advanced user and know what you are doing. Use at your own risk.", value: _jsx("div", { className: "flex items-center flex-col", children: _jsx(Switch, { checked: expertMode, onCheckedChange: setExpertMode }) }) }));
};
//# sourceMappingURL=ExpertMode.js.map