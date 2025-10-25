import fs from 'fs';
import сrypto from 'node:crypto';
import process from 'process';

const calculateHash = async () => {
  const fileUrl = new URL("./files/fileToCalculateHashFor.txt", import.meta.url);
  const input = fs.createReadStream(fileUrl);
  const hash = сrypto.createHash('sha256');

  hash.setEncoding('hex');
  input.pipe(hash).pipe(process.stdout);
  input.on('end', () => process.stdout.write('\n'));
};

await calculateHash();
