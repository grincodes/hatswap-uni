import React, { FC } from 'react';
interface LoaderProps extends React.ComponentProps<'svg'> {
    size?: number;
    stroke?: string;
    strokeWidth?: number;
    className?: string;
    circleClassName?: string;
}
/**
 * Takes in custom size and stroke for circle color, default to primary color as fill,
 * need ...rest for layered styles on top
 */
export declare const Loader: FC<LoaderProps>;
/**
 * @deprecated
 */
export declare const LoadingOverlay: FC<{
    show?: boolean;
}>;
export declare const LogoLoader: FC<LoaderProps>;
export {};
//# sourceMappingURL=loader.d.ts.map