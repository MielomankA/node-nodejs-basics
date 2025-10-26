const RSS_PREFIX = 'RSS_'

const parseEnv = () => {
  const rssVariables = Object.entries(process.env).filter(([key]) => {
    return key.startsWith(RSS_PREFIX);
  }).map(envObject => {
    return `${envObject[0]}=${envObject[1]}`;
  }).join('; ');

  console.log(rssVariables);
};

parseEnv();
