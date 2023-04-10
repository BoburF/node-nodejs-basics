import { open, writeFile } from "node:fs";
import { fileURLToPath } from "node:url"

const create = async () => {
    // Write your code here
    const pathToFresh = fileURLToPath(new URL("./files/fresh.txt", import.meta.url))
    await open(pathToFresh, async (err, fd) => {
        if (!!err) {
            const content = "I am fresh and young"
            await writeFile(pathToFresh, content, (err) => {
                if (err) throw new Error("FS operation failed");
                else console.log("File created");
            })
        } else {
            throw new Error("FS operation failed")
        }
    })

};

await create();
