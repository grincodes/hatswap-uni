import { Token } from 'sushi/currency';
export declare const useCustomTokens: () => {
    data: Record<string, Token>;
    mutate: (type: 'add' | 'remove', currency: Token[]) => void;
    hasToken: (currency: Token | string) => boolean;
};
//# sourceMappingURL=useCustomTokens.d.ts.map