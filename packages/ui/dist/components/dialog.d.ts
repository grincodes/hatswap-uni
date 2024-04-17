import * as DialogPrimitive from '@radix-ui/react-dialog';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { FC, ReactNode } from 'react';
import { ChainId } from 'sushi/chain';
declare const dialogVariants: (props?: ({
    variant?: "default" | "opaque" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const dialogOverlayVariants: (props?: ({
    variant?: "default" | "opaque" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const Dialog: React.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
interface DialogOverlay extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>, VariantProps<typeof dialogOverlayVariants> {
}
declare const DialogOverlay: React.ForwardRefExoticComponent<DialogOverlay & React.RefAttributes<HTMLDivElement>>;
interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof dialogVariants> {
    hideClose?: boolean;
}
declare const DialogContent: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
interface DialogReviewProps extends Omit<React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>, 'children' | 'open'> {
    children: ({ confirm }: {
        confirm(): void;
    }) => ReactNode;
}
declare const DialogReview: FC<DialogReviewProps>;
interface DialogCustomProps {
    children: ReactNode;
    dialogType: DialogType;
}
declare const DialogCustom: FC<DialogCustomProps>;
interface DialogConfirmProps extends DialogContentProps {
    chainId: ChainId;
    testId: string;
    successMessage: ReactNode;
    buttonLink?: string;
    buttonText?: string;
    txHash: string | undefined;
    status: 'idle' | 'loading' | 'success' | 'error';
}
declare const DialogConfirm: FC<DialogConfirmProps>;
declare enum DialogType {
    Review = 0,
    Confirm = 1
}
interface DialogProviderProps {
    children: ReactNode;
}
declare const DialogProvider: FC<DialogProviderProps>;
type UseDialog<T> = T extends DialogType.Review ? {
    open: boolean;
    setOpen(open: boolean): void;
    confirm(): void;
} : {
    open: boolean;
    setOpen(open: boolean): void;
};
declare const useDialog: <T extends DialogType>(type: T) => UseDialog<T>;
export { Dialog, DialogClose, DialogConfirm, DialogContent, DialogCustom, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPrimitive, DialogProvider, DialogReview, DialogTitle, DialogTrigger, DialogType, useDialog, };
//# sourceMappingURL=dialog.d.ts.map