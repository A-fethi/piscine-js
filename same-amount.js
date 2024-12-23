const sameAmount = (str, regexp1, regexp2) => {
    let reg1 = str.split(regexp1)
    let reg2 = str.split(regexp2)

    return reg1.length === reg2.length ? true : false;
}
