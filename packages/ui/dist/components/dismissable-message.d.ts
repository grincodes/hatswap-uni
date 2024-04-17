import { FC } from 'react';
import { type MessageProps } from './message';
interface DismissableMessageProps extends MessageProps {
    storageKey: string;
    showUntil: string;
}
export declare const DismissableMessage: FC<DismissableMessageProps>;
export {};
//# sourceMappingURL=dismissable-message.d.ts.map