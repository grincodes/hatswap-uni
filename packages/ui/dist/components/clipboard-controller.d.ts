import React, { FC } from 'react';
interface ClipboardControllerPayload {
    isCopied: boolean;
    setCopied(toCopy: string): void;
}
interface ClipboardControllerProps {
    hideTooltip?: boolean;
    children: (payload: ClipboardControllerPayload) => React.ReactNode;
}
export declare const ClipboardController: FC<ClipboardControllerProps>;
export {};
//# sourceMappingURL=clipboard-controller.d.ts.map