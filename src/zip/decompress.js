import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'path';

const decompress = async () => {
  const fileUrl = new URL("./files/fileToCompress.txt", import.meta.url);
  const fileArchiveUrl = new URL("./files/archive.gz", import.meta.url);
  const fileName = path.basename(fileUrl.pathname);
  const archiveFileName = path.basename(fileArchiveUrl.pathname);

  try {
    const source = createReadStream(fileArchiveUrl);
    const decompressor = createGunzip();
    const destination = createWriteStream(fileUrl);

    await pipeline(
      source,
      decompressor,
      destination
    );

    console.log(`The file '${archiveFileName}' successfully decompressed in '${fileName}'.`);
  } catch (err) {
    console.error('Error during decompression process:', err);
    throw err;
  }
};

await decompress();
