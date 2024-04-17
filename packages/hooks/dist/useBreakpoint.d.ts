import defaultTheme from 'tailwindcss/defaultTheme';
export declare function useBreakpoint<K extends keyof typeof defaultTheme.screens>(breakpointKey: K): Record<`is${Capitalize<K>}`, boolean>;
//# sourceMappingURL=useBreakpoint.d.ts.map