import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const spawnChildProcess = async (args) => {
  const fileUrl = new URL("./files/script.js", import.meta.url);
  const filePath = fileURLToPath(fileUrl);
  const command = process.execPath;

  const allArguments = [filePath, ...args];

  const options = {
    stdio: 'inherit'
  };

  const child = spawn(command, allArguments, options);

  child.on('error', (err) => {
    console.error('Error in child process', err);
  });

  return child;
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
