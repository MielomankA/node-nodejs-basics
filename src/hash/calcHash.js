import fs from 'fs';
import crypto from 'node:crypto';

const calculateHash = async () => {
  const fileUrl = new URL("./files/fileToCalculateHashFor.txt", import.meta.url);
  const input = fs.createReadStream(fileUrl);
  const hash = crypto.createHash('sha256');

  hash.setEncoding('hex');
  input.pipe(hash).pipe(process.stdout);
  input.on('end', () => process.stdout.write('\n'));
};

await calculateHash();
