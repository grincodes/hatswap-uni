import { ReactNode } from 'react';
import { ChainId } from 'sushi/chain';
export type NetworkSelectorOnSelectCallback<T extends number = ChainId> = (chainId: T, close: () => void) => void;
export interface NetworkSelectorProps<T extends number = ChainId> {
    showAptos?: boolean;
    networks: readonly T[];
    selected: T;
    onSelect: NetworkSelectorOnSelectCallback<T>;
    children: ReactNode;
}
declare const NetworkSelector: <T extends number>({ showAptos, onSelect, networks, children, }: Omit<NetworkSelectorProps<T>, "variant">) => import("react/jsx-runtime").JSX.Element;
export { NetworkSelector };
//# sourceMappingURL=network-selector.d.ts.map