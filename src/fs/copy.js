import fs from 'fs';

const folderUrl = new URL("./files", import.meta.url);
const folderUrlCopy = new URL("./files_copy", import.meta.url);

const copy = async () => {
  if (!fs.existsSync(folderUrl)) {
    throw Error('FS operation failed');
  }

  if (fs.existsSync(folderUrlCopy)) {
    throw Error('FS operation failed');
  } else {
    fs.cp(folderUrl, folderUrlCopy, { recursive: true }, (err) => {
      if (err) {
        console.error('Error copying directory:', err);
      } else {
        console.log('Directory copied successfully!');
      }
    });
  }
};

await copy();
