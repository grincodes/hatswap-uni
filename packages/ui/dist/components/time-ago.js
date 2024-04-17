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
import { jsx as _jsx } from "react/jsx-runtime";
import { Slot } from '@radix-ui/react-slot';
import { useInterval } from '@sushiswap/hooks';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import React, { useState } from 'react';
const TimeAgo = React.forwardRef((_a, ref) => {
    var { value, asChild } = _a, props = __rest(_a, ["value", "asChild"]);
    const Comp = asChild ? Slot : 'span';
    const [distance, setDistance] = useState(formatDistanceToNow(value, { addSuffix: true, includeSeconds: true }));
    useInterval(() => {
        setDistance(formatDistanceToNow(value, { addSuffix: true, includeSeconds: true }));
    }, 1000);
    return (_jsx(Comp, Object.assign({ ref: ref }, props, { children: distance })));
});
TimeAgo.displayName = 'TimeAgo';
export { TimeAgo };
//# sourceMappingURL=time-ago.js.map