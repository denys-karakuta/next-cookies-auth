import { useCallback, useEffect, useRef } from 'react';

const useAbortController = () => {
    const lastAbortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => () => lastAbortControllerRef.current?.abort(), []);

    const getAbortControllerSignal = useCallback((): AbortSignal => {
        lastAbortControllerRef.current?.abort();

        const newController = new AbortController();
        lastAbortControllerRef.current = newController;

        return newController.signal;
    }, []);

    return { getAbortControllerSignal };
};

export default useAbortController;
