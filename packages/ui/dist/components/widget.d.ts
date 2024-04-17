import { type VariantProps } from 'class-variance-authority';
import React from 'react';
declare const widgetVariants: (props?: ({
    variant?: "default" | "empty" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const widgetActionVariants: (props?: ({
    variant?: "default" | "empty" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface WidgetProps extends React.ButtonHTMLAttributes<HTMLDivElement>, VariantProps<typeof widgetVariants> {
}
declare const Widget: React.ForwardRefExoticComponent<WidgetProps & React.RefAttributes<HTMLDivElement>>;
declare const WidgetHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const WidgetTitle: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const WidgetDescription: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export interface WidgetActionProps extends React.ButtonHTMLAttributes<HTMLDivElement>, VariantProps<typeof widgetActionVariants> {
}
declare const WidgetAction: {
    ({ variant, className, ...props }: WidgetActionProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const WidgetFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { Widget, WidgetAction, WidgetDescription, WidgetFooter, WidgetHeader, WidgetTitle, };
//# sourceMappingURL=widget.d.ts.map