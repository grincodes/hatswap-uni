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
import classNames from 'classnames';
import * as React from 'react';
import { useEffect, useMemo, useRef, useState, useTransition } from 'react';
import { buttonIconVariants } from './button';
import { Chip } from './chip';
import { textFieldVariants } from './text-field';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from './tooltip';
const ChipInputRoot = React.forwardRef((_a, ref) => {
    var props = __rest(_a, []);
    return _jsx("div", Object.assign({ ref: ref, className: "flex gap-2 items-center" }, props));
});
ChipInputRoot.displayName = 'ChipInputRoot';
function codeTranslator(code) {
    if (code === 'Enter')
        return '\n';
    return code;
}
function inputTranslator(value, code) {
    if (code === 'Enter')
        return `${value}\n`;
    return value;
}
const ChipInput = (_a) => {
    var { className, icon: Icon, iconProps, size, values, variant, onValueChange, delimiters: _delimiters = [',', ';', ':', ' ', 'Enter', 'Tab'], mutateValue, maxValues } = _a, props = __rest(_a, ["className", "icon", "iconProps", "size", "values", "variant", "onValueChange", "delimiters", "mutateValue", "maxValues"]);
    const ref = useRef(null);
    const [state, setState] = useState(`${values.join(',')},`);
    const [_pending, startTransition] = useTransition();
    // const _inputHasText = ref.current && ref.current.value !== ''
    const delimiters = useMemo(() => _delimiters.map(codeTranslator), [_delimiters]);
    // Empty when reset
    useEffect(() => {
        if (values.length === 0) {
            setState('');
        }
    }, [values]);
    const split = (str) => {
        const regExp = new RegExp(`(?:${delimiters.map((el) => el).join('|')})+`);
        return str.split(regExp).filter((el) => el !== '');
    };
    const sync = (values) => startTransition(() => onValueChange(values));
    const onKeyUp = (e) => {
        if (!ref.current)
            return;
        const value = inputTranslator(e.currentTarget.value, e.key);
        if (delimiters.includes(codeTranslator(e.key))) {
            setState((prev) => {
                return `${prev}${value}`;
            });
            ref.current.value = '';
        }
        sync([...split(state), value]);
    };
    const onKeyDown = (e) => {
        const value = e.currentTarget.value;
        if (e.code === 'Backspace' && value === '') {
            setState((prev) => {
                const removeLastTag = split(prev).slice(0, -1);
                sync(removeLastTag);
                return `${removeLastTag.join(' ')},`;
            });
        }
    };
    const removeTag = (index) => {
        setState((prev) => {
            const tags = split(prev);
            const newTags = [...tags.slice(0, index), ...tags.slice(index + 1)];
            sync(newTags);
            return `${newTags.join(' ')},`;
        });
    };
    const tags = split(state);
    return (_jsxs(ChipInputRoot, { className: textFieldVariants({
            variant,
            size,
            className: 'relative gap-2 flex-wrap !h-[unset]',
        }), children: [Icon ? _jsx(Icon, Object.assign({}, iconProps, { className: buttonIconVariants() })) : null, tags.length > 0
                ? tags.map((value, i) => (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Chip, { onClose: () => removeTag(i), variant: "secondary", children: mutateValue ? mutateValue(value) : value }) }), _jsx(TooltipContent, { children: _jsx("p", { children: value }) })] }) }, i)))
                : null, (maxValues ? tags.length < maxValues : true) ? (_jsx("input", Object.assign({ onKeyDown: onKeyDown, onKeyUp: onKeyUp, className: classNames(className, 'flex flex-grow bg-transparent truncate !outline-none !ring-0'), ref: ref }, props))) : null] }));
};
export { ChipInput };
//# sourceMappingURL=chip-input.js.map