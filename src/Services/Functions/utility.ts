export const toCapitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const isUrlIncluding = (path: string): boolean => {
    return window.location.href.includes(path)
}
