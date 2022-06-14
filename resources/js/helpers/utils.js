export const range = (start, end) => {
    return [...Array(end).keys()].map(el => el + start)
}

export const getTagListFromStr = (str) => {
    return (str.replace(/([.,\/\\])|(\s{2,})/gi, ' ')).split(' ').filter(value => value !== '')
}
