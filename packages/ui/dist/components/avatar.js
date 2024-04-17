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
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import Image from 'next/image';
import * as React from 'react';
import classNames from 'classnames';
import { cloudinaryLogoImageLoader } from '../cloudinary';
const Avatar = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(AvatarPrimitive.Root, Object.assign({ ref: ref, className: classNames('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className) }, props)));
});
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, width, src }, ref) => {
    var _a;
    const _width = (_a = Number(width)) !== null && _a !== void 0 ? _a : 40;
    return (_jsx(AvatarPrimitive.Image, { src: cloudinaryLogoImageLoader({ src, width: _width }), asChild: true, ref: ref, className: classNames('aspect-square h-full w-full', className), children: _jsx(Image, { loader: cloudinaryLogoImageLoader, alt: "avatar", src: src, width: _width, height: _width }) }));
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(AvatarPrimitive.Fallback, Object.assign({ ref: ref, className: classNames('flex h-full w-full items-center justify-center rounded-full bg-muted', className) }, props)));
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
export { Avatar, AvatarFallback, AvatarImage };
//# sourceMappingURL=avatar.js.map