const debounce = (func, delay) => {
    let wait
    return (...args) => {
        clearTimeout(wait)
        wait = setTimeout(() => {
            func(...args)
        }, delay)
    }
}

const opDebounce = (func, delay, obj = {}) => {
    // let wait
    let chekcer = true

    return (...args) => {
        if (obj.leading && chekcer) {
            func(...args)
            chekcer = false
        }
        setTimeout(() => {
            chekcer = true
        }, delay)
    }
}