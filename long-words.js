const longWords = (arr) => {
    return arr.every(word => typeof(word) === "string" && word.length >= 5);
}

const oneLongWord = (arr) => {
    return arr.some(word => word.length >= 10 && typeof(word) === "string")
}

const noLongWords = (arr) => {
    return arr.every(word => !(typeof word === 'string' && word.length >= 7))
}
