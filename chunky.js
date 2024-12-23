const chunk = (arr, size) => {
    let newArr = new Array();
    while (arr.length > 0) {
        newArr.push(arr.splice(0, size))
    }
    return newArr;
}
