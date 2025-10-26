import fs from 'fs';

const folderUrl = new URL("./files", import.meta.url);

const list = async () => {
  if (!fs.existsSync(folderUrl)) {
    throw Error('FS operation failed');
  }

  fs.readdir(folderUrl, (err, files) => {
    if (err) {
      console.error(err);
    }

    console.log(files);
  })
};

await list();
