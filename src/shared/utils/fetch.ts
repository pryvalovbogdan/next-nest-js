import { isServer, PORT } from '../constants/env';

const envAwareFetch = (url: string, options?: Record<string, unknown>) => {
  const fetchUrl = isServer && url.startsWith('/') ? `http://localhost:${PORT}${url}` : url;

  console.log('fetchUrl', fetchUrl);

  return fetch(fetchUrl, options).then(res => res.json());
};

export { envAwareFetch as fetch };
