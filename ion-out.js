const ionOut = (str) => {
    let arr = new Array();
    arr = str.match(/\w+t(?=ion)/g)
    return arr || []
}

console.log(ionOut('transfusion'));
