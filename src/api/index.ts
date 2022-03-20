import axios, { AxiosResponse } from 'axios';


const BASE_URL = `someurl`;

const TIMEOUT = 30000; // timeout the API request after 30 seconds

type HttpMethods = 'get' | 'post' | 'patch' | 'put' | 'delete';

interface Request {
  data?: unknown;
  headers?: { [key: string]: unknown };
  method?: HttpMethods;
  params?: unknown;
  url: string;
}

export default function request({ data, method = 'get', params, url }: Request): Promise<AxiosResponse> {
  const reqUrl = `${BASE_URL}${url}`;

  return axios({
    data,
    method,
    params,
    timeout: TIMEOUT,
    url: reqUrl,
  });
}
