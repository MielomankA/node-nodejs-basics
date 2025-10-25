import { createReadStream, createWriteStream, existsSync } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const compress = async () => {
  const fileUrl = new URL("./files/fileToCompress.txt", import.meta.url);
  const fileArchiveUrl = new URL("./files/archive.gz", import.meta.url);
  const source = createReadStream(fileUrl);
  const zipper = createGzip();
  const destination = createWriteStream(fileArchiveUrl);

  await pipeline(
    source,
    zipper,
    destination
  );

  console.log('Pipeline succeeded.');
};

await compress();
