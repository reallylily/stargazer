import { gql } from 'graphql-request';

import { ApiTopic } from './types';
import { request } from 'api/index';

const makeSearchQuery = (term?: string) => {
  return gql`
        query {
          topic(name: "${term}") {
            id
            name
            relatedTopics(first: 10) {
              name
              id
              stargazerCount
            }
            stargazerCount
          }
        }
    `;
};

export async function getSearch(searchTerm?: string): Promise<ApiTopic> {
  const query = makeSearchQuery(searchTerm);
  const response = await request(query);
  return response;
}
