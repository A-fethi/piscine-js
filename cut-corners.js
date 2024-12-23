const round = (num) => {
    let isNegative = false;
    
    if (num < 0) {
        num = -num;
        isNegative = true;
    }

    const res = trunc(num);

    if (isNegative) {
        let negative = (num - res < 0.5 ? res : res + 1) * -1;
        return negative;
    }

    return num - res < 0.5 ? res : res + 1;
}

const ceil = (num) => {
    const res = trunc(num);
    const mod = num - res;
    return mod < 0 ? res : mod == 0 ? res : res + 1;
}

const floor = (num) => {
    const res = trunc(num);
    return res < 0 ? res - 1 : res;
}

function abs(num) {
	return num > 0 ? num : num < 0 ? num * -1 : 0;
}

const trunc = (num) => {
    let sign = num < 0 ? -1 : 1;
    num = abs(num);

    let res = 0;
    let div = Number.MAX_VALUE;

    while (num >= 1) {
        if (num >= div) {
            res += div;
            num -= div;
        } else {
            div /= 10;
        }
    }

    return res * sign;
}
