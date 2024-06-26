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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo } from 'react';
import { NETWORK_CIRCLE_ICON, NETWORK_NAKED_ICON } from './network';
export const NetworkIcon = (_a) => {
    var { type = 'circle', chainId } = _a, props = __rest(_a, ["type", "chainId"]);
    const Icon = useMemo(() => {
        if (type === 'naked') {
            return NETWORK_NAKED_ICON[chainId];
        }
        return NETWORK_CIRCLE_ICON[chainId];
    }, [chainId, type]);
    if (Icon)
        return _jsx(Icon, Object.assign({}, props));
    return _jsx(_Fragment, {});
};
//# sourceMappingURL=NetworkIcon.js.map