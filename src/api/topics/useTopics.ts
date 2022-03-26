import { AxiosError } from 'axios';
import { GraphQLClient, gql } from 'graphql-request';
import { useQuery, useMutation, UseMutateFunction, useQueryClient } from 'react-query';

import { getFriendlyError } from 'utils/error';
// import { PlatformConfig } from 'config';

export const QUERY_KEY = 'topics';
const endpoint = `https://api.github.com/graphql`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `bearer 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`,
    // Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

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

// topic(name: "react") {
//   name
//   id
//   stargazerCount
//   stargazers {
//     totalCount
//   }
//   relatedTopics(first: 10) {
//     id
//   }
// }
// }

// async function updateTask(params: UpdateOnboardingTaskParams): Promise<void> {
//   const { data, name } = params;
//   await request({ data, method: 'put', url: `${ENDPOINT}/${name}` });
// }

export const useTopics = (searchTerm?: string): UseTopics => {
  const queryClient = useQueryClient();

  const { isLoading, isFetched, error, data } = useQuery<any, AxiosError, any>(
    [QUERY_KEY, searchTerm],
    async () => {
      const { viewer } = await graphQLClient.request(
        gql`
          query {
            viewer {
              login
            }
          }
        `,
      );
      return viewer;
    },
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
