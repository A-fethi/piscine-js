const split = (str, sep, limit) => {
    let arr = new Array();
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (sep == '') {
            arr.push(str[i]);
        } else if (str[i] == sep[0] && check(str.slice(i, sep.length + i), sep)) {
            arr.push(res)
            res = "";
            i += sep.length - 1;
        } else {
            res += str[i];
        }
    }
    if (sep.length !== 0) {
        arr.push(res);
    }
    return arr.slice(0,limit);
}

const check = (str, sep) => {
    return str === sep;
}

const join = (arr, sep, limit) => {
    let res = "";
    if (typeof(sep) === "undefined") {
        sep = ','
    }
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
        if (i !== arr.length - 1) {
            res += sep
        }
    }
    return res.slice(0, limit);
}
