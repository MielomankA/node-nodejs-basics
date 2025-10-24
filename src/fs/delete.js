import fs from 'fs';

const fileUrlForDelete = new URL("./files/fileToRemove.txt", import.meta.url);

const remove = async () => {
  if (!fs.existsSync(fileUrlForDelete)) {
    throw Error('FS operation failed');
  }

  fs.unlink(fileUrlForDelete, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('fileToRemove.txt was successfully deleted');
    }
  });
};

await remove();
