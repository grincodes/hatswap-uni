'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useCallback, useLayoutEffect, useRef, useState, } from 'react';
import classNames from 'classnames';
export const Carousel = ({ defaultSlide = 0, containerWidth = 1280, slideWidth = 400, slides, render, className, }) => {
    const [buttons, setButtons] = useState({
        hasNext: slides.length > 1,
        hasPrev: false,
    });
    const container = useRef(null);
    const ref = useRef(null);
    const prev = useCallback(() => {
        var _a;
        requestAnimationFrame(() => {
            if (ref.current) {
                const scrollLeft = ref.current.scrollLeft;
                ref.current.scrollLeft = scrollLeft - slideWidth;
            }
        });
        if (ref.current) {
            setButtons({
                hasNext: true,
                hasPrev: ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollLeft) - slideWidth > 20,
            });
        }
    }, [slideWidth]);
    const next = useCallback(() => {
        var _a, _b, _c;
        requestAnimationFrame(() => {
            if (ref.current) {
                const scrollLeft = ref.current.scrollLeft;
                ref.current.scrollLeft = scrollLeft + slideWidth;
            }
        });
        if (ref.current && container.current) {
            setButtons({
                hasNext: ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollWidth) - ((_b = ref.current) === null || _b === void 0 ? void 0 : _b.scrollLeft) - slideWidth >
                    ((_c = container.current) === null || _c === void 0 ? void 0 : _c.clientWidth),
                hasPrev: true,
            });
        }
    }, [slideWidth]);
    useLayoutEffect(() => {
        var _a, _b, _c;
        if (defaultSlide > 0) {
            requestAnimationFrame(() => {
                if (ref.current) {
                    const scrollLeft = ref.current.scrollLeft;
                    ref.current.scrollLeft = scrollLeft + slideWidth * (defaultSlide - 1);
                }
            });
            if (ref.current && container.current) {
                setButtons({
                    hasNext: ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollWidth) -
                        ((_b = ref.current) === null || _b === void 0 ? void 0 : _b.scrollLeft) -
                        slideWidth * (defaultSlide - 1) >
                        ((_c = container.current) === null || _c === void 0 ? void 0 : _c.clientWidth),
                    hasPrev: true,
                });
            }
        }
    }, [defaultSlide, slideWidth]);
    return (_jsxs("div", { className: "relative group", children: [_jsx("div", { ref: container, className: "overflow-hidden", children: _jsx("div", { ref: ref, className: "relative overflow-x-scroll overflow-x-contain whitespace-nowrap snap-x hide-scrollbar scroll-smooth pt-4 pb-10", children: _jsx("div", { className: classNames(className, 'w-full align-top inline-flex'), children: slides.map((el, i) => (_jsx("div", { className: "inline-block snap-start", children: _jsxs("div", { className: classNames(i === 0 ? 'ml-0' : i === slides.length - 1 ? 'pr-4' : '', 'flex mr-5 h-full'), style: {
                                    transform: `translateX(calc(max(${containerWidth}px, 100vw)/2 - ${containerWidth / 2}px))`,
                                }, children: [_jsx("span", {}), render(el, i)] }) }, i))) }) }) }), buttons.hasPrev && (_jsx("div", { className: "scale-[0.8] group-hover:scale-[1] opacity-0 group-hover:opacity-100 flex absolute top-0 left-4 bottom-0 items-center transition-all", children: _jsx("button", { type: "button", onClick: (e) => {
                        e.stopPropagation();
                        prev();
                    }, className: "shadow-md hover:border-accent border border-transparent p-3 rounded-full cursor-pointer bg-gray-200 dark:bg-slate-700", children: _jsx(ChevronLeftIcon, { width: 32, height: 32 }) }) })), buttons.hasNext && (_jsx("div", { className: "scale-[0.8] group-hover:scale-[1] opacity-0 group-hover:opacity-100 flex absolute top-0 right-4 bottom-0 items-center transition-all", children: _jsx("button", { type: "button", onClick: (e) => {
                        e.stopPropagation();
                        next();
                    }, className: "shadow-md hover:border-accent border border-transparent p-3 rounded-full cursor-pointer bg-gray-200 dark:bg-slate-700", children: _jsx(ChevronRightIcon, { width: 32, height: 32 }) }) }))] }));
};
//# sourceMappingURL=carousel.js.map