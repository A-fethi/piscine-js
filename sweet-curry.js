const mult2 = (num) => {
    return function (b) {
        return num * b
    }
}

const add3 = (num) => {
    return function (b) {
        return function (c) {
            return num + b + c
        }
    }
}

const sub4 = (num) => {
    return function (b) {
        return function (c) {
            return function (d) {
                return num - b - c - d
            }
        }
    }
}