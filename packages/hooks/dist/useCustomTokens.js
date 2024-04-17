'use client';
import { getAddress, isAddress } from '@ethersproject/address';
import { useCallback, useMemo } from 'react';
import { Token } from 'sushi/currency';
import { useLocalStorage } from './useLocalStorage';
export const useCustomTokens = () => {
    const [value, setValue] = useLocalStorage('sushi.customTokens', {});
    const hydrate = useCallback((data) => {
        return Object.entries(data).reduce((acc, [k, { address, chainId, decimals, name, symbol }]) => {
            acc[k] = new Token({ address, chainId, decimals, name, symbol });
            return acc;
        }, {});
    }, []);
    const addCustomToken = useCallback((currencies) => {
        const data = currencies.map((currency) => ({
            chainId: currency.chainId,
            id: currency.id,
            address: currency.address,
            name: currency.name,
            symbol: currency.symbol,
            decimals: currency.decimals,
        }));
        setValue((prev) => {
            return data.reduce((acc, cur) => {
                acc[`${cur.chainId}:${cur.address}`] = cur;
                return acc;
            }, { ...prev });
        });
    }, [setValue]);
    const removeCustomToken = useCallback((currency) => {
        setValue((prev) => {
            return Object.entries(prev).reduce((acc, cur) => {
                if (cur[0] === `${currency.chainId}:${currency.address}`) {
                    return acc; // filter
                }
                acc[cur[0]] = cur[1]; // add
                return acc;
            }, {});
        });
    }, [setValue]);
    const hasToken = useCallback((currency) => {
        if (typeof currency === 'string') {
            if (!currency.includes(':')) {
                throw new Error('Address provided instead of id');
            }
            const [_chainId, _currency] = currency.split(':');
            if (!isAddress(_currency)) {
                throw new Error('Address provided not a valid ERC20 address');
            }
            return !!value[`${_chainId}:${getAddress(_currency)}`];
        }
        return !!value[`${currency.chainId}:${currency.address}`];
    }, [value]);
    const mutate = useCallback((type, currency) => {
        if (type === 'add')
            addCustomToken(currency);
        if (type === 'remove')
            removeCustomToken(currency[0]);
    }, [addCustomToken, removeCustomToken]);
    return useMemo(() => {
        return {
            data: hydrate(value),
            mutate,
            hasToken,
        };
    }, [hasToken, hydrate, mutate, value]);
};
//# sourceMappingURL=useCustomTokens.js.map