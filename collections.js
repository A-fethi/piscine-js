function arrToSet(arr) {
    arr = new Set(arr);
    return arr
}

function arrToStr(arr) {
    arr = arr.join('');
    return arr
}

function setToArr(set) {
    set = new Array(...set)
    return set
}

function setToStr(set) {
    set = Array.from(set).join('')
    return set
}

function strToArr(str) {
    str = str.split('')
    return str
}

function strToSet(str) {
    str = new Set(str)
    return str
}

function mapToObj(map) {
    map = Object.fromEntries(map)
    return map
}

function objToArr(obj) {
    obj = Object.values(obj)
    return obj
}

function objToMap(obj) {
    obj = new Map(Object.entries(obj))
    return obj
}

function arrToObj(arr) {
    arr = Object.assign({}, arr)
    return arr
}

function strToObj(str) {
    str = Object.assign({}, str)
    return str
}

function yell(str) {
    return str.toUpperCase();
}

function capitalize(str) {
    return String(yell(str[0])) + String(str.slice(1).toLowerCase())
}

function superTypeOf(type) {
    if (Array.isArray(type)) {
        return "Array"
    } else if (type instanceof Set) {
        return "Set"
    } else if (type instanceof Map) {
        return "Map"
    } else if (type === null) {
        return "null"
    } else if (type === undefined) {
        return "undefined"
    } else {
        return capitalize(typeof(type))
    }
}
