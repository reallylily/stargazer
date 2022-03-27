import { AxiosError } from 'axios';
import { gql } from 'graphql-request';
import { UseMutateFunction, useMutation, useQuery, useQueryClient } from 'react-query';

import request from 'api/index';
import { getFriendlyError } from 'utils/error';

// import { PlatformConfig } from 'config';

export const QUERY_KEY = 'topic';
export interface ApiTopic {
  topic: any;
  data: {
    topic: unknown;
  };
}

export interface UseSearch {
  data?: ApiTopic;
  error?: string;
  isLoading: boolean;
  search: UseMutateFunction<ApiTopic, AxiosError, string>;
  clear: () => void;
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

export async function getSearch(searchTerm?: string): Promise<ApiTopic> {
  const query = makeSearchQuery(searchTerm);
  const response = await request(query);
  return response;
}

export const useSearch = (): UseSearch => {
  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries(QUERY_KEY);
  };

  const { data, mutate, error, isLoading } = useMutation<ApiTopic, AxiosError, string>([QUERY_KEY], getSearch, {});

  return {
    data,
    error: getFriendlyError(error, 'topics'),
    isLoading,
    search: mutate,
    clear: invalidateQueries,
  };
};

export default useSearch;
