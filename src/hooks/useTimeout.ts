import { useEffect, useRef } from "react"

export const useTimeout = (cb: () => void) => {
    const savedCallback = useRef(cb);

    useEffect(() => {
        savedCallback.current = cb;
    }, [cb]);

    useEffect(() => {
        const functionId = setTimeout(() => savedCallback.current(), 3000);

        return () => clearTimeout(functionId);
    }, []);
}