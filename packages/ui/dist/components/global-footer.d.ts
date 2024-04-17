import { ReactNode } from 'react';
import { ExtractProps } from '../types';
import { ContainerProps } from './container';
export interface FooterProps extends React.HTMLProps<HTMLDivElement>, Pick<ExtractProps<ContainerProps>, 'maxWidth'> {
    children?: ReactNode;
}
export declare const GlobalFooter: import("react").ComponentType<FooterProps>;
//# sourceMappingURL=global-footer.d.ts.map