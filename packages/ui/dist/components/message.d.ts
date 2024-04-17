import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const messageVariants: (props?: ({
    variant?: "muted" | "destructive" | "warning" | "success" | "info" | null | undefined;
    size?: "default" | "xs" | "sm" | null | undefined;
    hasClose?: "yes" | "no" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface MessageProps extends React.ButtonHTMLAttributes<HTMLDivElement>, VariantProps<typeof messageVariants> {
    asChild?: boolean;
    children?: React.ReactNode;
    onClose?(): void;
}
declare const Message: React.ForwardRefExoticComponent<MessageProps & React.RefAttributes<HTMLDivElement>>;
export { Message };
//# sourceMappingURL=message.d.ts.map