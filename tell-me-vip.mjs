import { readdirSync, readFileSync, writeFileSync } from "fs";
import path from 'path'

const dir = process.argv[2] !== undefined ? process.argv[2] : process.cwd()
let count = 0
let fullNames = []

const files = readdirSync(dir)
for (let file of files) {
    const filePath = path.join(dir, file)
    const data = readFileSync(filePath, "utf-8")
    const parsedData = JSON.parse(data)

    if (parsedData.answer === "yes") {
        file = path.basename(file, '.json')
        file = file.split("_")
        let fullName = file[1] + " " + file[0]
        fullNames.push(fullName)
    }
}
fullNames.sort()

let res = [];
fullNames.forEach(name => {
    count++
    res.push(`${count}. ${name}`)
});
writeFileSync("vip.txt", res.join("\n"));
