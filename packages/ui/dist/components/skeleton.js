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
import { cva } from 'class-variance-authority';
import classNames from 'classnames';
function SkeletonBox(props) {
    return (_jsx("div", Object.assign({}, props, { className: classNames(props.className, 'rounded-lg overflow-hidden animate-pulse bg-black/[0.10] dark:bg-white/[0.10]') })));
}
function SkeletonCircle(props) {
    return (_jsx("div", Object.assign({}, props, { style: Object.assign(Object.assign({}, props.style), { minWidth: props.radius, minHeight: props.radius, width: props.radius, height: props.radius }), className: classNames(props.className, 'rounded-full overflow-hidden animate-pulse bg-black/[0.10] dark:bg-white/[0.10]') })));
}
const skeletonTextVariants = cva('flex w-full', {
    variants: {
        fontSize: {
            xs: 'h-[18px] py-[3px]',
            sm: 'h-5 py-[3px]',
            default: 'h-6 py-[3px]',
            lg: 'h-[28px] py-[3px]',
            xl: 'h-[28px]',
            '2xl': 'h-[44px] py-[6px]',
            '3xl': 'h-[36px] py-[3px]',
        },
        align: {
            left: '',
            center: 'justify-center',
            right: 'justify-end',
        },
    },
    defaultVariants: {
        fontSize: 'default',
        align: 'left',
    },
});
function SkeletonText(_a) {
    var { className, align, fontSize } = _a, props = __rest(_a, ["className", "align", "fontSize"]);
    return (_jsx("div", Object.assign({}, props, { className: classNames(skeletonTextVariants({ align, fontSize })), children: _jsx("div", { className: classNames(className, 'flex w-full h-full rounded-md overflow-hidden animate-pulse bg-black/[0.10] dark:bg-white/[0.10]') }) })));
}
export { SkeletonBox, SkeletonCircle, SkeletonText };
//# sourceMappingURL=skeleton.js.map