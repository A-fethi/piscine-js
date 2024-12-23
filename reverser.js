const reverse = (arr) => {
    if (Array.isArray(arr)) {
        let res = new Array();
        for (let i = arr.length - 1; i >= 0; i--) {
            res.push(arr[i]);
        }
        return res;
    } else {
        let res = "";
        for (let i = arr.length - 1; i >= 0; i--) {
            res += arr[i];
        }
        return res;
    }
}
