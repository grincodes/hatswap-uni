'use client';
import { useCallback, useEffect, useState, } from 'react';
export const useLocalStorage = (key, initialValue) => {
    const readValue = useCallback(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        }
        catch (_error) {
            // If error also return initialValue
            return initialValue;
        }
    }, [initialValue, key]);
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(readValue);
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = useCallback((value) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
            window.dispatchEvent(new Event(key));
        }
        catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    }, [key, storedValue]);
    // To trigger rerenders globally
    useEffect(() => {
        const listener = () => {
            const item = window.localStorage.getItem(key);
            if (item)
                setStoredValue(JSON.parse(item));
        };
        window.addEventListener(key, listener);
        return () => window.removeEventListener(key, listener);
    }, [key]);
    return [storedValue, setValue];
};
//# sourceMappingURL=useLocalStorage.js.map