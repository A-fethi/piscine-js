function words(str) {
    const arr = str.split(" ");
    return arr
}

function sentence(arr) {
    const str = arr.join(" ");
    return str
}

function yell(str) {
    return str.toUpperCase();
}

function whisper(str) {
    return "*" + str.toLowerCase() + "*";
}

function capitalize(str) {
    return String(yell(str[0])) + String(str.slice(1).toLowerCase())
}
