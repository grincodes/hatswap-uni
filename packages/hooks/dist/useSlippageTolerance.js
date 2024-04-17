'use client';
import { useLocalStorage } from './useLocalStorage';
export const useSlippageTolerance = (key, defaultValue) => useLocalStorage(key || 'swapSlippage', defaultValue || '0.5');
//# sourceMappingURL=useSlippageTolerance.js.map