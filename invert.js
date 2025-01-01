const invert = (obj) => {
    let newObj;
    newObj = Object.entries(obj).map(([key, value]) => [value, key])
    return Object.fromEntries(newObj)
}
