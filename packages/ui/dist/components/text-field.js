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
import { cva } from 'class-variance-authority';
import * as React from 'react';
import classNames from 'classnames';
import { buttonIconVariants } from './button';
const inputRegex = /^\d*(?:\\[.])?\d*$/; // match escaped "." characters via in a non-capturing group
const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
const numericInputProps = {
    placeholder: '0.0',
};
const percentInputProps = {
    placeholder: '0',
    pattern: '^[0-9]*$',
    inputMode: 'decimal',
    maxLength: 3,
};
const textFieldVariants = cva('truncate appearance-none dark:text-slate-50 text-gray-900 w-full !ring-0 !outline-none', {
    variants: {
        size: {
            sm: 'min-h-[36px] h-[36px] py-1',
            default: 'min-h-[40px] h-[40px] py-2',
        },
        variant: {
            default: 'border-0 flex items-center px-3 rounded-lg font-medium block bg-secondary group-hover:bg-muted group-focus:bg-accent',
            naked: 'border-0 bg-transparent',
            outline: 'bg-secondary flex items-center px-3 rounded-lg font-medium block border border-accent group-hover:border-black/20 group-focus:border-black/30 hover:border-black/30 focus-within:border-black/30 dark:group-hover:border-white/20 dark:group-focus:border-white/30 dark:hover:border-white/30 dark:focus-within:border-white/30',
        },
        isError: {
            yes: 'bg-red/10 text-red',
            no: '',
        },
        hasIcon: {
            yes: 'pl-[40px]',
            no: '',
        },
        hasUnit: {
            yes: 'rounded-r-none !border-r-0',
            no: '',
        },
    },
    defaultVariants: {
        variant: 'default',
        hasIcon: 'no',
        hasUnit: 'no',
        size: 'default',
        isError: 'no',
    },
});
const isTypeText = (type) => type === 'text';
const isTypeNumber = (type) => type === 'number';
const isTypePercent = (type) => type === 'percent';
const Component = (_a, ref) => {
    var { icon: Icon, iconProps, unit, variant, className, type, onChange, maxDecimals, size, onValueChange, isError } = _a, props = __rest(_a, ["icon", "iconProps", "unit", "variant", "className", "type", "onChange", "maxDecimals", "size", "onValueChange", "isError"]);
    const _onChange = (e) => {
        const nextUserInput = e.target.value;
        if (typeof nextUserInput === 'undefined') {
            return;
        }
        if (isTypeNumber(type)) {
            const val = `${nextUserInput}`.replace(/,/g, '.');
            if (onValueChange && val === '')
                onValueChange('');
            if (inputRegex.test(escapeRegExp(val))) {
                if (maxDecimals && (val === null || val === void 0 ? void 0 : val.includes('.'))) {
                    const [, decimals] = val.split('.');
                    if (onValueChange && decimals.length <= maxDecimals) {
                        onValueChange(val);
                    }
                }
                else {
                    if (onValueChange)
                        onValueChange(val);
                }
            }
        }
        else if (isTypeText(type) && onValueChange) {
            onValueChange(nextUserInput);
        }
        else if (isTypePercent(type)) {
            const _nextUserInput = nextUserInput.replace(/,/g, '.').replace(/%/g, '');
            if (_nextUserInput === '' ||
                inputRegex.test(escapeRegExp(_nextUserInput))) {
                if (onValueChange)
                    onValueChange(_nextUserInput);
            }
        }
        if (onChange) {
            onChange(e);
        }
    };
    return (_jsxs("div", { className: "group relative flex items-center justify-between w-full", children: [Icon ? (_jsx(Icon, Object.assign({}, iconProps, { className: buttonIconVariants({
                    className: classNames('text-muted-foreground absolute left-3', iconProps === null || iconProps === void 0 ? void 0 : iconProps.className),
                }) }))) : null, _jsx("input", Object.assign({ onChange: _onChange, className: textFieldVariants({
                    isError: isError ? 'yes' : 'no',
                    variant,
                    hasIcon: Icon ? 'yes' : 'no',
                    hasUnit: unit ? 'yes' : 'no',
                    className: classNames(className, 'flex-grow flex-1 !outline-none !ring-0'),
                }), ref: ref, autoCorrect: "off", autoCapitalize: "none", spellCheck: "false", autoComplete: "off" }, (isTypeNumber(type) && numericInputProps), (isTypePercent(type) && percentInputProps), props)), unit ? (_jsx("div", { className: textFieldVariants({
                    isError: isError ? 'yes' : 'no',
                    variant,
                    size,
                    className: 'text-muted-foreground rounded-l-none !w-[unset]',
                }), children: unit })) : null] }));
};
const TextField = React.forwardRef(Component);
TextField.displayName = 'TextField';
const TextFieldDescription = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("p", Object.assign({ ref: ref, className: classNames('text-sm text-muted-foreground', className) }, props)));
});
TextFieldDescription.displayName = 'TextFieldDescription';
export { TextField, TextFieldDescription, textFieldVariants, };
//# sourceMappingURL=text-field.js.map