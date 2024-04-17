import { useMutation } from '@tanstack/react-query';
export const useApplyForTokenList = () => {
    return useMutation({
        mutationFn: async ({ chainId, listType, tokenAddress, tokenSymbol, tokenName, tokenDecimals, logoFile, }) => {
            const data = await fetch('/tokenlist-request/api/submit', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    tokenAddress,
                    tokenSymbol,
                    tokenName,
                    tokenDecimals,
                    logoFile,
                    chainId,
                    listType,
                }),
            });
            return await data.json();
        },
    });
};
//# sourceMappingURL=useApplyForTokenList.js.map