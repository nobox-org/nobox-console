const realStorage = <K extends string, V extends Record<string, any>>(key: K) => ({
    getObject<T>(): T | null {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },
    setObject(value: V) {
        const item = JSON.stringify(value);
        localStorage.setItem(key, item);
    }
})

const mockStorage = (key: string) => ({
    getObject<T>(): T | null {
        const o: Record<string, any> = { "string": null }
        return o[key];
    },
    setObject(value: any) {
        return value;
    }
});


const localStorageCanBeUsed = typeof window !== 'undefined';

export const storage = (key: string) => localStorageCanBeUsed ? realStorage(key) : mockStorage(key);   