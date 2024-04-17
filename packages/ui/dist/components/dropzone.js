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
import ReactDropzone from 'react-dropzone';
/**
 * @deprecated
 */
export const Dropzone = (_a) => {
    var { label = 'Select a CSV file to upload', onDrop } = _a, rest = __rest(_a, ["label", "onDrop"]);
    return (_jsx(ReactDropzone, Object.assign({ onDrop: onDrop }, rest, { children: ({ getRootProps, getInputProps, isDragActive, isDragReject }) => {
            return (_jsx("div", Object.assign({}, getRootProps(), { className: classNames(isDragReject
                    ? 'bg-red-500 bg-opacity-[0.15] border-red'
                    : isDragActive
                        ? 'bg-blue-500 bg-opacity-[0.15] border-blue'
                        : 'dark:bg-white/[0.04] bg-black/[0.04] border-gray-300 dark:border-slate-700', 'border-dashed border-2 rounded-2xl py-6 flex justify-center'), children: _jsxs("div", { className: "space-y-3 text-center flex flex-col items-center justify-center", children: [_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, enableBackground: "new 0 0 497.6 497.6", version: "1.1", viewBox: "0 0 497.6 497.6", xmlSpace: "preserve", children: [_jsx("path", { className: "text-slate-700", fill: "currentColor", d: "M52.4 448c-5.6 0-5.6-7.2-5.6-12V23.2c0-4.8 0-7.2 5.6-7.2h344.8c4.8 0 9.6 2.4 9.6 7.2V436c0 4.8-4.8 12-9.6 12H52.4z" }), _jsx("path", { className: "text-slate-700", fill: "currentColor", d: "M390.8 32v400h-328V32h328m6.4-32H52.4C38 0 30.8 9.6 30.8 23.2V436c0 13.6 7.2 28 21.6 28h344.8c13.6 0 25.6-14.4 25.6-28V23.2c0-13.6-12-23.2-25.6-23.2z" }), _jsx("g", { className: "text-slate-500", fill: "currentColor", children: _jsx("path", { d: "M134 120h188.8c6.4 0 12-5.6 12-12s-5.6-12-12-12H134c-6.4 0-12 5.6-12 12s5.6 12 12 12zM134 184h108.8c6.4 0 12-5.6 12-12s-4.8-12-11.2-12H134c-6.4 0-12 5.6-12 12s5.6 12 12 12zM322.8 224H134c-6.4 0-12 9.6-12 16s5.6 16 12 16h188.8c6.4 0 12-9.6 12-16s-4.8-16-12-16zM243.6 296H134c-6.4 0-12 5.6-12 12s5.6 12 12 12h108.8c6.4 0 12-5.6 12-12 .8-6.4-4.8-12-11.2-12z" }) }), _jsx("circle", { cx: "345.2", cy: "389.6", r: "108", fill: "currentColor", className: isDragReject
                                        ? 'text-red'
                                        : isDragActive
                                            ? 'text-blue'
                                            : 'text-slate-600' }), _jsx("path", { className: "text-white", fill: "currentColor", d: "M396.4 376.8L354 334.4c-4.8-4.8-12-4.8-16.8 0l-42.4 42.4c-4.8 4.8-4.8 12 0 16.8s12.8 4.8 16.8 0l23.2-22.4v85.6c0 6.4 5.6 12 12 12s12-5.6 12-12v-85.6l21.6 22.4c2.4 2.4 4.8 3.2 8 3.2s5.6-.8 8-3.2c4.8-4.8 4.8-12 0-16.8z" })] }), _jsx("div", { className: "flex text-sm text-gray-600 dark:text-slate-400", children: _jsxs("span", { className: classNames(isDragReject
                                    ? 'text-red hover:text-red-400'
                                    : isDragActive
                                        ? 'text-blue hover:text-blue-400'
                                        : 'text-gray-900 dark:text-slate-200', 'flex flex-col gap-1 outline-none relative cursor-pointer rounded-md font-medium hover:purple focus-within:outline-none'), children: [_jsx("label", { htmlFor: "file-upload", className: "cursor-pointer outline-none text-sm font-medium", children: label }), _jsx("p", { className: classNames(isDragReject
                                            ? 'text-red-200'
                                            : isDragActive
                                                ? 'text-blue-200'
                                                : 'text-gray-500 dark:text-slate-500', 'text-xs'), children: "or drag and drop it here" }), _jsx("input", Object.assign({ id: "file-upload", name: "file-upload", type: "file", className: "sr-only outline-none" }, getInputProps()))] }) })] }) })));
        } })));
};
//# sourceMappingURL=dropzone.js.map