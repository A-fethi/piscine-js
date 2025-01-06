const filterValues = (obj, func) => {
    let result = {}
    for (let key in obj) {
        if (func(obj[key], key)) {
            result[key] = obj[key]
        }
    }
    return result
}

const mapValues = (obj, func) => {
    let result = {}
    for (let key in obj) {
        result[key] = func(obj[key], key)
    }
    return result
}

const reduceValues = (obj, func, acc) => {
    let keys = Object.keys(obj)
    let res = acc !== undefined ? acc : obj[keys[0]];
    let currentIndex = acc !== undefined ? 0 : 1

    for (let i = currentIndex; i < keys.length; i++) {
        res = func(res, obj[keys[i]])
    }
    return res
}
