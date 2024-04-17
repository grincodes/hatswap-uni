import { FC, ReactElement } from 'react';
interface Badge {
    badgeContent: ReactElement;
    children: ReactElement;
    className?: string;
    position?: 'top-left' | 'bottom-right' | 'top-right' | 'bottom-left';
}
export declare const Badge: FC<Badge>;
export {};
//# sourceMappingURL=badge.d.ts.map