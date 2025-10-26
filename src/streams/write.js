import fs from 'fs';

const write = async () => {
  const fileUrl = new URL("./files/fileToWrite.txt", import.meta.url);
  const outputFile = fs.createWriteStream(fileUrl);
  const input = process.stdin;

  if (!fs.existsSync(fileUrl)) {
    throw Error('The file to write does not exist');
  }

  console.log('*** Please start writing something and press Enter, then Ctrl + C to finish ***');
  input.pipe(outputFile);

  process.on('SIGINT', () => {
    console.log('\nWriting finished');
    input.unpipe(outputFile);
    outputFile.end();
  });
};

await write();
