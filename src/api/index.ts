import { gql, GraphQLClient } from 'graphql-request';

import { PlatformConfig } from 'config';

const { baseApiUrl } = PlatformConfig;

export const endpoint = `${baseApiUrl}/graphql`;
const token = process.env.REACT_APP_GITHUB_API_KEY;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const defaultGQL = gql`
  query {
    viewer {
      login
    }
  }
`;

export function request(query = defaultGQL): Promise<unknown> {
  return graphQLClient.request(query);
}

export default request;
