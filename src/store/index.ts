export const set = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value))
}

export const get = (key: string): any => {
    try {
        return JSON.parse(window.localStorage.getItem(key) || "")
    } catch (e) {
        return ""
    }
}

const __store_mark = "__mark"

export const getMark = (): string => {
    return get(__store_mark)
}

export const setMark = (value: string) => {
    return set(__store_mark, value)
}