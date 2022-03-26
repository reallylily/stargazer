import { GraphQLClient } from 'graphql-request';
import React from 'react';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

const CACHE_TIME = 5 * 1000; // 5 seconds

// purge the API cache when app is first loaded
export const queryCache = new QueryCache({
  onError: console.error,
});
queryCache.clear();

export interface Props {
  children?: React.ReactNode;
}

// const endpoint = `https://api.github.com/graphql`;

// const graphQLClient = new GraphQLClient(endpoint, {
//   headers: {
//     Authorization: `Bearer ${process.env.API_KEY}`,
//   },
// });

const ApiProvider: React.FC<Props> = ({ children }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { cacheTime: CACHE_TIME, refetchOnMount: false, refetchOnWindowFocus: false, retry: false },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ApiProvider;
