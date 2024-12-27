const filter = (arr, func) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result
}

const reject = (arr, func) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result
}

const partition = (arr, func) => {
    let result = []
    let arr1 = []
        let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            arr1.push(arr[i])
        } else {
            arr2.push(arr[i])
        }
    }
    result.push(arr1, arr2)
    return result
}
