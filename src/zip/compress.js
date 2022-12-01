import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { fileURLToPath } from "node:url";
import { createReadStream, createWriteStream } from "node:fs";

const compress = async () => {
  // Write your code here
  const pathToFile = fileURLToPath(
    new URL("./files/fileToCompress.txt", import.meta.url)
  );
  const pathToZip = fileURLToPath(
    new URL("./files/archive.txt.gz", import.meta.url)
  );
  const gzip = createGzip();
  const src = createReadStream(pathToFile);
  const zipFile = createWriteStream(pathToZip);
  pipeline(src, gzip, zipFile, (err) => {
    if (err) {
        throw new Error("Operation is failed")
    }
  });
};

await compress();
