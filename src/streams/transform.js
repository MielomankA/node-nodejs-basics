import { Transform } from 'node:stream';

const transform = async () => {
  const input = process.stdin;
  const output = process.stdout;

  console.log('*** Please start writing something and press Enter, then Ctrl + C to finish ***');

  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const reversedOutput = chunk.toString().split('').reverse().join('');

      callback(null, reversedOutput);
    }
  });

  input.pipe(reverseTransform).pipe(output);

  process.on('SIGINT', () => {
    input.unpipe(reverseTransform);
  });
};

await transform();
