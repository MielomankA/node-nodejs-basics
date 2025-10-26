import { Worker } from 'node:worker_threads';
import os from 'os';

const workerFileUrl = new URL("./worker.js", import.meta.url);

const workerPromise = (workerFile, inputData, index) => {
  return new Promise((resolve) => {
    const worker = new Worker(workerFile, { workerData: inputData });

    worker.on('message', (value) => {
      resolve({ status: 'resolved', data: value });
    });
    worker.on('exit', (statusCode) => {
      if (statusCode !== 0) {
        console.warn(`Worker ${inputData.index} stopped with exit code ${statusCode}`);
        resolve({ status: 'error', data: null });
      }
    });
    worker.on('error', (err) => {
      console.error('Worker error:', err);
      resolve({ status: 'error', data: null });
    });
  })
}

const performCalculations = async () => {
  const numCPUs = os.cpus().length;
  const workers = [];
  const START_VALUE = 10;

  for (let i = 0; i < numCPUs; i++) {
    workers.push(workerPromise(workerFileUrl, { index: i, value: START_VALUE + i }, i));
  }

  const results = await Promise.all(workers);
  console.log('Result:', results);
};

await performCalculations();
