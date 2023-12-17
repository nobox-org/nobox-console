import { mockLocalStorage } from "./mock-local-storage";
export const storage = <K extends string, V extends Record<string, any>>(key: K) => {
    const ls = typeof window === "undefined" ? mockLocalStorage : localStorage;

    return {
        getObject<T>(): T | null {
            const item = ls.getItem(key);
            return item ? JSON.parse(item) : null;
        },
        setObject(value: V) {
            if (value) {
                const item = JSON.stringify(value);
                ls.setItem(key, item);
            }
        },
        setString(value: string) {
            ls.setItem(key, value);
        },
        getString() {
            return ls.getItem(key);
        }
    }
};
