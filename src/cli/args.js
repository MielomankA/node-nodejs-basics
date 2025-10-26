const parseArgs = () => {
  const allArguments = process.argv;
  const neededArguments = allArguments.slice(2);
  const resultArray = [];

  for (let i = 0; i < neededArguments.length; i += 2) {
    const argKey = neededArguments[i];
    const argValue = neededArguments[i + 1];

    resultArray.push(`${argKey.slice(2)} is ${argValue}`);
  }

  console.log(resultArray.join(', '));
};

parseArgs();
