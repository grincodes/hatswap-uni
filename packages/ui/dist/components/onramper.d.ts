import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react';
export declare const OnramperButton: FC<{
    children: ReactNode;
    className?: string;
}>;
interface OnramperPanelProps {
    address?: string;
}
export declare const OnramperPanel: FC<OnramperPanelProps>;
interface OnramperContext {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}
declare const OnramperContext: React.Context<OnramperContext | undefined>;
interface ProviderProps {
    children: (({ open, setOpen, }: {
        open: boolean;
        setOpen(open: boolean): void;
    }) => ReactNode) | ReactNode;
}
export declare const OnramperProvider: FC<ProviderProps>;
export declare const useOnramperContext: () => OnramperContext;
export {};
//# sourceMappingURL=onramper.d.ts.map