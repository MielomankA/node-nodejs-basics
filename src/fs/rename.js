import fs from 'fs';

const fileUrl = new URL("./files/wrongFilename.txt", import.meta.url);
const renameFileUrl = new URL("./files/properFilename.md", import.meta.url);

const rename = async () => {
  if (!fs.existsSync(fileUrl) || fs.existsSync(renameFileUrl)) {
    throw Error('FS operation failed');
  }

  fs.rename(fileUrl, renameFileUrl, (err) => {
    if (err) {
      console.error('Error rename file:', err);
    } else {
      console.log('File renamed successfully!');
    }
  });
};

await rename();
