const filterKeys = (obj, func) => {
    let result = {}
    let array = Object.entries(obj);
    array.forEach(([key, value]) => {
        if (func(key)) {
            result[key] = value
        }
    });
    return result
}

const mapKeys = (obj, func) => {
    let result = {}
    let array = Object.entries(obj);
    array.forEach(([key, value]) => {
        result[func(key)] = value
    });
    return result
}

const reduceKeys = (obj, func, acc) => {
    let keys = Object.keys(obj)
    let res = acc !== undefined ? acc : keys[0];
    let currentIndex = acc !== undefined ? 0 : 1

    for (let i = currentIndex; i < keys.length; i++) {
        res = func(res, keys[i])
    }
    return res
}
