const debounce = (func, num) => {
    let time;
    return (...args) => {
        clearTimeout(time)
        time = setTimeout(() => {
            func(...args)
        }, num)
    }
}

const opDebounce = (func, num, option = {}) => {
    let time;
    let isLeading = false
    return (...args) => {
        if (option.leading && !isLeading) {
            func(...args)
            isLeading = true
        }
        clearTimeout(time)
        time = setTimeout(() => {
            func(...args)
        }, num)
    }
}