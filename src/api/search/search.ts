import { gql } from 'graphql-request';

import { ApiTopic } from './types';
import { request } from 'api/index';

const makeSearchQuery = (term?: string) => {
  return gql`
        query {
          topic(name: "${term}") {
            name
            stargazerCount
            relatedTopics(first: 10) {
              name
              stargazerCount
            }
          }
        }
    `;
};

export async function getSearch(searchTerm?: string): Promise<ApiTopic> {
  const query = makeSearchQuery(searchTerm);
  const response = await request(query);
  return response as ApiTopic;
}
