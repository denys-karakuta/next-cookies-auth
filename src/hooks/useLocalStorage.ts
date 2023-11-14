import { useState } from 'react';

const useLocalStorage = <T extends any>(key: string, initialValue: T) => {
    const storedValue = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    const [value, setValue] = useState<T>(initial);

    const setInLocalStorage = (newValue: T) => {
        setValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
    };

    const removeFromLocalStorage = (key: string) => {
        window.localStorage.removeItem(key);
    };

    return [value, setInLocalStorage, removeFromLocalStorage] as const;
};

export default useLocalStorage;
