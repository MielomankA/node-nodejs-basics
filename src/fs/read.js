import fs from 'fs';

const fileUrl = new URL("./files/fileToRead.txt", import.meta.url);

const read = async () => {
  if (!fs.existsSync(fileUrl)) {
    throw Error('FS operation failed');
  }

  fs.readFile(fileUrl, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    }

    console.log(data);
  })
};

await read();
