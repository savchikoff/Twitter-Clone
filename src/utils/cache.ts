export const readFromCache = (key: string) => {
    const storage = localStorage.getItem(key);
    if (storage) {
        return JSON.parse(storage);
    }
    return "";
};

export const writeToCache = (key: string, data: string) => {
    localStorage.setItem(key, JSON.stringify(data));
};