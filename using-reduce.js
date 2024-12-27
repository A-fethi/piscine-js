const adder = (arr, opt = 0) => {
    return arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        opt,
    );
}

const sumOrMul = (arr, opt = 0) => {
    return arr.reduce(
        (accumulator, currentValue) => currentValue % 2 === 0 ? accumulator * currentValue : accumulator + currentValue,
        opt,
    );
}

const funcExec = (arr, opt) => {
    return arr.reduce((accumulator, func) => func(accumulator), opt);
}
