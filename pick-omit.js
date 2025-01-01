const pick = (obj, arr) => {
    let newObj = {}
    if (Array.isArray(arr)) {
        newObj = Object.entries(obj).filter(([key]) => arr.some(item => item === key));
    } else {
        newObj = Object.entries(obj).filter(([key]) => arr === key);
    }
    return Object.fromEntries(newObj)
}

const omit = (obj, arr) => {
    let newObj = {}
    if (Array.isArray(arr)) {
        newObj = Object.entries(obj).filter(([key]) => !arr.some(item => item === key));
    } else {
        newObj = Object.entries(obj).filter(([key]) => !(arr === key));
    }
    return Object.fromEntries(newObj)
}
