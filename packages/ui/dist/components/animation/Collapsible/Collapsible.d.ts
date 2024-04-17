import { FC, ReactNode } from 'react';
interface Collapsible {
    open: boolean;
    children: ReactNode;
    className?: string;
    afterChange?: () => void;
}
export declare const Collapsible: FC<Collapsible>;
export {};
//# sourceMappingURL=Collapsible.d.ts.map