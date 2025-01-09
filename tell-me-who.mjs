import { readdir } from "fs";
import path from 'path'

const dir = process.argv[2] !== undefined ? process.argv[2] : process.cwd()
let count = 0
let fullNames = []
readdir(dir, (_, files) => {
    files.forEach(file => {
        file = path.basename(file, '.json')
        file = file.split("_")
        let fullName = file[1] + " " + file[0]
        fullNames.push(fullName)
    });
    fullNames.sort()
    
    fullNames.forEach(name => {
            count++
            let res = `${count}. ${name}`
            console.log(res);
    });
})