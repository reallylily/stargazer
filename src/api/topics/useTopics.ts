import { AxiosError } from 'axios';
import { gql } from 'graphql-request';
import { useQuery, useQueryClient } from 'react-query';

import request from 'api/index';
import { getFriendlyError } from 'utils/error';
// import { PlatformConfig } from 'config';

export const QUERY_KEY = 'topics';

console.log(process.env.API_KEY);

export interface UseTopics {
  data?: any;
  error?: string;
  // updateError?: string;
  isLoading: boolean;
  isFetched: boolean;
  // isUpdating: boolean;
  // updateTask: UseMutateFunction<void, AxiosError, UpdateOnboardingTaskParams>;
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

export async function getTopics(searchTerm?: string): Promise<any> {
  const query = makeSearchQuery(searchTerm);
  const response = await request(query);
  return response;
}

export const useTopics = (searchTerm?: string): UseTopics => {
  const queryClient = useQueryClient();

  const { isLoading, isFetched, error, data } = useQuery<any, AxiosError, any>(
    [QUERY_KEY, searchTerm],
    () => getTopics(searchTerm),
    {},
  );

  const invalidateQueries = () => {
    queryClient.invalidateQueries(QUERY_KEY);
  };

  // const task = useMemo(() => (data && name ? mapTask(data, name) : undefined), [data, name]);
  // const {
  //   mutate,
  //   error: saveError,
  //   isLoading: isUpdating,
  // } = useMutation<void, AxiosError, UpdateOnboardingTaskParams>([QUERY_KEY], updateTask, {
  //   onSuccess: invalidateQueries,
  // });

  return {
    data,
    error: getFriendlyError(error, 'topics'),
    // updateError: getFriendlyError(saveError, 'topics'),
    isLoading,
    isFetched,
    // isUpdating,
    // updateTask: mutate,
    reload: invalidateQueries,
  };
};

export default useTopics;
