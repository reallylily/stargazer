import axios, { AxiosResponse } from 'axios';
import { gql, GraphQLClient } from 'graphql-request';

// import { PlatformConfig } from 'config';

const endpoint = `https://api.github.com/graphql`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer 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`,
    // Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

const defaultGQL = gql`
  query {
    viewer {
      login
    }
  }
`;

type HttpMethods = 'get' | 'post' | 'patch' | 'put' | 'delete';
const TIMEOUT = 30000; // timeout the API request after 30 seconds
const token = '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';

interface Request {
  data?: unknown;
  headers?: { [key: string]: unknown };
  method?: HttpMethods;
  params?: unknown;
}

export default function request({ data, headers, method = 'post', params }: Request): Promise<AxiosResponse> {
  return axios({
    data,
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
    method,
    params,
    timeout: TIMEOUT,
    url: endpoint,
  });
}

// export default function request(query = defaultGQL): Promise<any> {
//   return graphQLClient.request(query);
// }
