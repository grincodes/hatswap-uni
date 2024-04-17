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
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { Controller, FormProvider, useForm, useFormContext, } from 'react-hook-form';
import classNames from 'classnames';
import { CardDescription, CardHeader, CardTitle } from './card';
import { Label } from './label';
const Form = FormProvider;
const FormSection = ({ title, description, children, }) => {
    return (_jsxs("div", { className: "grid grid-cols-3 gap-x-10 lg:gap-x-[56px] py-2", children: [_jsx("div", { className: "col-span-3 md:col-span-1 py-4", children: _jsxs(CardHeader, { className: "!p-0", children: [_jsx(CardTitle, { children: title }), _jsx(CardDescription, { children: description })] }) }), _jsx("div", { className: "col-span-3 md:col-span-2 space-y-6 py-4", children: children })] }));
};
const FormFieldContext = React.createContext({});
const FormField = (_a) => {
    var props = __rest(_a, []);
    return (_jsx(FormFieldContext.Provider, { value: { name: props.name }, children: _jsx(Controller, Object.assign({}, props)) }));
};
const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error('useFormField should be used within <FormField>');
    }
    const { id } = itemContext;
    return Object.assign({ id, name: fieldContext.name, formItemId: `${id}-form-item`, formDescriptionId: `${id}-form-item-description`, formMessageId: `${id}-form-item-message` }, fieldState);
};
const FormItemContext = React.createContext({});
const FormItem = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    const id = React.useId();
    return (_jsx(FormItemContext.Provider, { value: { id }, children: _jsx("div", Object.assign({ ref: ref, className: classNames('space-y-2', className) }, props)) }));
});
FormItem.displayName = 'FormItem';
const FormLabel = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    const { error, formItemId } = useFormField();
    return (_jsx(Label, Object.assign({ ref: ref, className: classNames(error && 'text-destructive', className), htmlFor: formItemId }, props)));
});
FormLabel.displayName = 'FormLabel';
const FormControl = React.forwardRef((_a, ref) => {
    var props = __rest(_a, []);
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return (_jsx(Slot, Object.assign({ ref: ref, id: formItemId, "aria-describedby": !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`, "aria-invalid": !!error }, props)));
});
FormControl.displayName = 'FormControl';
const FormDescription = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    const { formDescriptionId } = useFormField();
    return (_jsx("p", Object.assign({ ref: ref, id: formDescriptionId, className: classNames('text-sm text-muted-foreground', className) }, props)));
});
FormDescription.displayName = 'FormDescription';
const FormMessage = React.forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { error, formMessageId } = useFormField();
    const body = error ? String(error === null || error === void 0 ? void 0 : error.message) : children;
    if (!body) {
        return null;
    }
    if (error)
        return (_jsx(FormError, Object.assign({ id: formMessageId, ref: ref }, props, { children: body })));
    return (_jsx(FormDescription, Object.assign({ id: formMessageId, ref: ref }, props, { children: body })));
});
FormMessage.displayName = 'FormMessage';
const FormError = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx("p", Object.assign({ ref: ref, className: classNames('text-sm font-medium text-red', className) }, props, { children: children })));
});
FormError.displayName = 'FormError';
export { Form, FormControl, FormDescription, FormError, FormField, FormItem, FormLabel, FormMessage, FormSection, useForm, useFormField, };
//# sourceMappingURL=form.js.map