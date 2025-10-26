import fs from 'fs';

const read = async () => {
  const fileUrl = new URL("./files/fileToRead.txt", import.meta.url);
  const input = fs.createReadStream(fileUrl);

  input.pipe(process.stdout);
  input.on('end', () => process.stdout.write('\n'));
};

await read();
