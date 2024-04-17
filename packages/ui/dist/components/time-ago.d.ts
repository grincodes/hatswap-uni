import React from 'react';
export interface TimeAgoProps extends Omit<React.ButtonHTMLAttributes<HTMLSpanElement>, 'value'> {
    asChild?: boolean;
    value: Date;
}
declare const TimeAgo: React.ForwardRefExoticComponent<TimeAgoProps & React.RefAttributes<HTMLButtonElement>>;
export { TimeAgo };
//# sourceMappingURL=time-ago.d.ts.map