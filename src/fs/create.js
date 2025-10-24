import fs from 'fs';

const fileURL = new URL("./files/fresh.txt", import.meta.url);
const fileContent = 'I am fresh and young';

const create = async () => {
  if (fs.existsSync(fileURL)) {
    throw Error('FS operation failed');
  } else {
    fs.writeFile(fileURL, fileContent, (err) => {
      if (err) {
        throw err;
      } else {
        console.log('The file was successfully created and written!');
      }
    });
  }
};

await create();
