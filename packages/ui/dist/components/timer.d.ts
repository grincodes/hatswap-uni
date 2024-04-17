import { FC, ReactNode } from 'react';
interface State {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}
interface Timer {
    date: Date;
    children(state: State): ReactNode;
}
export declare const Timer: FC<Timer>;
export {};
//# sourceMappingURL=timer.d.ts.map