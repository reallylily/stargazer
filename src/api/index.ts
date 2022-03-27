import { gql, GraphQLClient } from 'graphql-request';

// import { PlatformConfig } from 'config';

const endpoint = `https://api.github.com/graphql`;
const token = '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';

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

export function request(query = defaultGQL): Promise<any> {
  return graphQLClient.request(query);
}

export default request;
