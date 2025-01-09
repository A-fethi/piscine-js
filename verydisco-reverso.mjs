import {readFile} from 'fs'

const fileName = process.argv[2]
readFile(fileName, 'utf8', (_, data) => {
    let splittedArg = data.split(" ")
    let arr = []
    let res = ""
    splittedArg.forEach(arg => {
        const len = Math.floor(arg.length / 2)
        arr.push(arg.slice(len) + arg.slice(0, len))
    });
    res = arr.join(" ")
    console.log(res);
});

