// TODO: allow canceling requests (for when a user clicks the next/back arrows repeatedly

import { gql, GraphQLClient } from 'graphql-request';

// import { PlatformConfig } from 'config';

const endpoint = `https://api.github.com/graphql`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer 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`,
    // Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

interface GQLRequest {
  data?: unknown;
}

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

// export default function request({ data }: GQLRequest): Promise<any> {
//   console.log(data);
//   return graphQLClient.request(
//     gql`
//       query {
//         viewer {
//           login
//         }
//       }
//     `,
//   );
// }
