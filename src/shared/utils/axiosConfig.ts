import axios, { AxiosRequestConfig } from 'axios';

import { isServer, PORT } from '../constants/env';
import { RequestTypeWithData, RequestTypeWithoutData } from './types';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json, text/javascript, */*; q=0.01';

axios.interceptors.response.use(
  response => (response && response.data ? response.data : response),
  error => Promise.reject(error),
);

axios.interceptors.request.use((req: AxiosRequestConfig) => {
  // To set up hostname depending on execution environment
  const url = isServer && req?.url?.startsWith('/') ? `http://localhost:${PORT}${req.url}` : req.url;

  req.url = url;
  if (req?.method?.toLowerCase() !== 'get') {
    return req;
  }

  return {
    ...req,
    params: {
      ...req.params,
    },
  };
});

export function httpGet(...arg: RequestTypeWithoutData): Promise<any> {
  return axios.get.apply(null, arg);
}

export function httpPut(...arg: RequestTypeWithData) {
  return axios.put.apply(null, arg);
}

export function httpPost(...arg: RequestTypeWithData) {
  return axios.post.apply(null, arg);
}

export function httpDelete(...arg: RequestTypeWithoutData) {
  return axios.delete.apply(null, arg);
}

export function httpPatch(...arg: RequestTypeWithData) {
  return axios.patch.apply(null, arg);
}
