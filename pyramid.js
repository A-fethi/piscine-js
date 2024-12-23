const pyramid = (str, num) => {
    let res = "";
    for (let i = 1; i <= num; i++) {
        for (let k = i; k < num; k++) {
            for (let t = 0; t < str.length; t++) {
                res += " "
            }
        }
        for (let j = 1; j <= i; j++) {
            res += str
        }
        for (let j = 1; j < i; j++) {
            res += str
        }
        if (i !== num) {
            res += "\n"
        }
    }
    return res
}
