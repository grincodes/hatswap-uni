import defaultTheme from 'tailwindcss/defaultTheme';
import { useMediaQuery } from './useMediaQuery'; // Your tailwind config
export function useBreakpoint(breakpointKey) {
    const bool = useMediaQuery({
        query: `(min-width: ${defaultTheme.screens[breakpointKey]})`,
    });
    const capitalizedKey = breakpointKey[0].toUpperCase() + breakpointKey.substring(1);
    return {
        [`is${capitalizedKey}`]: bool,
    };
}
//# sourceMappingURL=useBreakpoint.js.map