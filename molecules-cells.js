const RNA = (str) => {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "G") {
            res += "C"
        } else if (str[i] === "C") {
            res += "G"
        } else if (str[i] === "T") {
            res += "A"
        } else if (str[i] === "A") {
            res += "U"
        }
    }
    return res;
}

const DNA = (str) => {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "C") {
            res += "G"
        } else if (str[i] === "G") {
            res += "C"
        } else if (str[i] === "A") {
            res += "T"
        } else if (str[i] === "U") {
            res += "A"
        }
    }
    return res;
}
