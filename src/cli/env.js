const RSS_PREFIX = 'RSS_'

const parseEnv = () => {
  const regex = new RegExp(`^${RSS_PREFIX}[A-Za-z0-9_]+$`);

  const rssVariables = Object.entries(process.env).filter(([key]) => {
    return regex.test(key);
  }).map(envObject => {
    return `${envObject[0]}=${envObject[1]}`;
  }).join('; ');

  console.log(rssVariables);
};

parseEnv();
