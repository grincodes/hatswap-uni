import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SushiIcon } from './icons/SushiIcon';
const Splash = () => {
    return (_jsx("div", { className: "fixed inset-0 bg-gray-100 dark:bg-slate-900 z-50 flex items-center justify-center", children: _jsxs("div", { className: "absolute top-[calc(50%-20px)] left-[calc(50%-20px)]", children: [_jsx("div", { className: "w-[50px] h-[50px] animate-[bounce_.5s_linear_infinite_0.17s] absolute", children: _jsx(SushiIcon, { width: 50, height: 50 }) }), _jsx("div", { className: "w-[50px] h-[5px] bg-black opacity-20 absolute top-[51px] left-0 rounded-[50%] animate-shadow" })] }) }));
};
const SplashController = ({ children, show = false, }) => {
    return _jsx(_Fragment, { children: show ? _jsx(Splash, {}) : children });
};
export { Splash, SplashController };
//# sourceMappingURL=splash-controller.js.map