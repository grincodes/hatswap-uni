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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { default as ReactDatePicker, } from 'react-datepicker';
import { CalendarIcon } from './icons';
import { textFieldVariants } from './text-field';
const DateField = (_a) => {
    var { testId, className, variant } = _a, props = __rest(_a, ["testId", "className", "variant"]);
    const [open, setOpen] = useState(false);
    return (_jsxs("div", { className: "relative w-full", children: [_jsx(ReactDatePicker, Object.assign({ open: open, onCalendarOpen: () => setOpen(true), onCalendarClose: () => setOpen(false), onClickOutside: () => setOpen(false), wrapperClassName: "w-full", customInput: _jsx("input", { "testdata-id": testId, className: textFieldVariants({ variant, className }) }) }, props)), variant !== 'naked' ? (_jsx("div", { role: "button", onClick: () => setOpen((open) => !open), onKeyDown: () => setOpen((open) => !open), className: "cursor-pointer absolute right-3 top-0 bottom-0 flex items-center", children: _jsx(CalendarIcon, { width: 20, height: 20, className: "text-muted-foreground mt-[-1.5px]" }) })) : null] }));
};
export { DateField };
//# sourceMappingURL=date-field.js.map