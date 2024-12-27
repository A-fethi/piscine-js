const fold = (arr, func, acc) => {
    for (let i = 0; i < arr.length; i++) {
        acc = func(acc, arr[i])
    }
    return acc
}

const foldRight = (arr, func, acc) => {
    for (let i = arr.length-1; i >= 0; i--) {
        acc = func(acc, arr[i])
    }
    return acc
}

const reduce = (arr, func, acc) => {
    let res = acc !== undefined ? acc : arr[0]
    let currentIndex = acc !== undefined ? 0 : 1
    
    for (let i = currentIndex;i < arr.length; i++) {
        res = func(res, arr[i])
    }
    return res
}

const reduceRight = (arr, func, acc) => {
    let res = acc !== undefined ? acc : arr[arr.length-1]
    let currentIndex = acc !== undefined ? arr.length-1 : arr.length-2


    console.log(arr[arr.length-1]);
    
    for (let i = currentIndex; i >= 0; i--) {
        res = func(res, arr[i])
    }
    return res
}
