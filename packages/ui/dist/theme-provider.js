'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { OnramperProvider } from './components/onramper';
import { ToastContainer } from './components/toast';
export const ThemeProvider = ({ children, forcedTheme, }) => {
    return (_jsx(NextThemeProvider, { attribute: "class", disableTransitionOnChange: true, forcedTheme: forcedTheme, children: _jsxs(OnramperProvider, { children: [_jsx(ToastContainer, {}), _jsx("div", { id: "network-check-portal" }), children, _jsx("div", { id: "popover-portal" }), _jsx("div", { id: "footer-portal" })] }) }));
};
//# sourceMappingURL=theme-provider.js.map