const args = process.argv[2]
let splittedArg = args.split(" ")
let arr = []
let res = ""
splittedArg.forEach(arg => {
    const len = Math.ceil(arg.length / 2)
    arr.push(arg.slice(len) + arg.slice(0, len))
});
res = arr.join(" ")
// if (res.includes("verydisco")) {
//     res += " (🕺🏼)"
// }

console.log(res);
