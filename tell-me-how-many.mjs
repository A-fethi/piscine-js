import { readdir } from 'fs'

const dir = process.argv[2] !== undefined ? process.argv[2] : process.cwd()

readdir(dir, (_, files) => {
    console.log(files.length);
});
