'use client';
import { useEffect } from 'react';
import { usePrevious } from './usePrevious';
export const useEffectDebugger = (effectHook, dependencies, dependencyNames = []) => {
    const previousDeps = usePrevious(dependencies, []);
    const changedDeps = dependencies.reduce((acc, dependency, index) => {
        if (dependency !== previousDeps[index]) {
            const keyName = dependencyNames[index] || index;
            acc[keyName] = {
                before: previousDeps[index],
                after: dependency,
            };
        }
        return acc;
    }, {});
    if (Object.keys(changedDeps).length) {
        console.debug('[use-effect-debugger] ', changedDeps);
    }
    useEffect(effectHook, dependencies);
};
//# sourceMappingURL=useEffectDebugger.js.map