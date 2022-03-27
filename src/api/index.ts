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

export default function request(query = defaultGQL): Promise<any> {
  return graphQLClient.request(query);
}
