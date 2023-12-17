class MockLocalStorage {
    private data: { [key: string]: string } = {};

    getItem(key: string): string | null {
        return this.data[key] || null;
    }

    setItem(key: string, value: string): void {
        this.data[key] = value;
    }

    removeItem(key: string): void {
        delete this.data[key];
    }

    clear(): void {
        this.data = {};
    }
}

export const mockLocalStorage = new MockLocalStorage();