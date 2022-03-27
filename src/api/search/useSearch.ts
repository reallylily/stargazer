import { AxiosError } from 'axios';
import { gql } from 'graphql-request';
import { useQuery, useQueryClient } from 'react-query';

import request from 'api/index';
import { getFriendlyError } from 'utils/error';

// import { PlatformConfig } from 'config';

export const QUERY_KEY = 'topic';

export interface UseSearch {
  data?: any;
  error?: string;
  isLoading: boolean;
  isFetched: boolean;
  reload: () => void;
}

const makeSearchQuery = (term = 'react') => {
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

export interface ApiTopics {
  data: {
    topic: unknown;
  };
}

export async function getSearch(searchTerm?: string): Promise<ApiTopics> {
  const query = makeSearchQuery(searchTerm);
  const response = await request(query);
  return response;
}

export const useSearch = (searchTerm?: string): UseSearch => {
  const queryClient = useQueryClient();

  const { isLoading, isFetched, error, data } = useQuery<ApiTopics, AxiosError, ApiTopics>(
    [QUERY_KEY, searchTerm],
    () => getSearch(searchTerm),
    {},
  );

  const invalidateQueries = () => {
    queryClient.invalidateQueries(QUERY_KEY);
  };

  return {
    data,
    error: getFriendlyError(error, 'topics'),
    isLoading,
    isFetched,
    reload: invalidateQueries,
  };
};

export default useSearch;
