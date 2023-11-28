const realStorage = <K extends string, V extends Record<string, any>>(key: K) => ({
    getObject<T>(): T | null {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },
    setObject(value: V) {
        if (value) {
            const item = JSON.stringify(value);
            localStorage.setItem(key, item);
        }
    },
    setString(value: string) {
        localStorage.setItem(key, value);
    },
    getString() {
        return localStorage.getItem(key);
    }
})

const localStorageCanBeUsed = typeof window !== 'undefined';
export const storage = (key: string) => localStorageCanBeUsed ? realStorage(key) : {} as ReturnType<typeof realStorage>;   