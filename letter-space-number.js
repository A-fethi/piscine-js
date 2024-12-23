const letterSpaceNumber = (str) => {
    return str.match(/(?!\w\s.\w)\w\s\d/g) || [];
}

console.log(letterSpaceNumber('I like 7up.'))
console.log(letterSpaceNumber('example 1, example 20'))