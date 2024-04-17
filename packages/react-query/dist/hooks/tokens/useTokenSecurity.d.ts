import { Token } from 'sushi/currency';
interface TokenSecurity {
    buy_tax: string;
    sell_tax: string;
    cannot_buy: string;
    cannot_sell_all: string;
    slippage_modifiable: string;
    is_honeypot: string;
    transfer_pausable: string;
    is_blacklisted: string;
    is_whitelisted: string;
}
export declare const useTokenSecurity: ({ currencies, enabled, }: {
    currencies: (Token | undefined)[];
    enabled?: boolean;
}) => import("@tanstack/react-query").UseQueryResult<{
    tokenSecurity: (TokenSecurity | undefined)[];
    honeypots: string[];
    isSupported: boolean;
}, unknown>;
export {};
//# sourceMappingURL=useTokenSecurity.d.ts.map