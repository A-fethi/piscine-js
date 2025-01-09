import { readFile, writeFile } from 'fs/promises';

const fileName = process.argv[2];
const option = process.argv[3];
const str = process.argv[4] || (option === "encode" ? "cypher.txt" : "clear.txt");


const data = await readFile(fileName, "utf-8");

if (option === "encode") {
    const encoded = Buffer.from(data).toString('base64');
    await writeFile(str, encoded);
} else if (option === "decode") {
    const decoded = Buffer.from(data, 'base64').toString('utf-8');
    await writeFile(str, decoded);
}


