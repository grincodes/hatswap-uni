import { useQuery } from '@tanstack/react-query';
import { ChainId } from 'sushi/chain';
import { Token } from 'sushi/currency';
const SUPPORTED_CHAINS = [
    ChainId.AVALANCHE,
    ChainId.FANTOM,
    ChainId.GNOSIS,
    ChainId.HARMONY,
    ChainId.ETHEREUM,
    ChainId.HECO,
    ChainId.ARBITRUM,
    ChainId.OPTIMISM,
];
const fetchTokenSecurityQueryFn = async (currencies) => {
    const supportedCurrencies = currencies.filter((currency) => currency && SUPPORTED_CHAINS.includes(currency.chainId));
    const tokenSecurity = await Promise.all(supportedCurrencies.map((currency) => fetch(`https://api.gopluslabs.io/api/v1/token_security/${currency.chainId}?contract_addresses=${currency.address}`)
        .then((response) => response.json())
        .then((data) => data?.result?.[currency.address.toLowerCase()])));
    const honeypots = tokenSecurity.reduce((acc, cur, i) => {
        const isHoneypot = cur?.is_honeypot === '1';
        const supportedCurrencyAddress = supportedCurrencies?.[i]?.address;
        if (isHoneypot && typeof supportedCurrencyAddress === 'string') {
            acc.push(supportedCurrencyAddress);
            return acc;
        }
        return acc;
    }, []);
    return {
        tokenSecurity,
        honeypots,
        isSupported: supportedCurrencies.length > 0,
    };
};
export const useTokenSecurity = ({ currencies, enabled = true, }) => {
    return useQuery({
        queryKey: ['useTokenSecurity', currencies?.map((currency) => currency?.id)],
        queryFn: () => fetchTokenSecurityQueryFn(currencies),
        enabled,
        keepPreviousData: true,
        staleTime: 900000,
        cacheTime: 86400000, // 24hs
    });
};
//# sourceMappingURL=useTokenSecurity.js.map