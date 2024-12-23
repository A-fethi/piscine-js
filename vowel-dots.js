let vowels = /[aeiouAEIOU]/g;

const vowelDots = (str) => {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(vowels)) {
            res += str[i] + ".";
        } else {
            res += str[i];
        }
    }
    return res;
}
