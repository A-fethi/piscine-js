const map = (arr, func) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i, arr));
    }
    return result
}

const flatMap = (arr, func) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const array = func(arr[i], i, arr)
        if (Array.isArray(array)) {
            result.push(...func(arr[i], i, arr))
        } else {
            result.push(func(arr[i], i, arr));
        }
    }
    return result
}
