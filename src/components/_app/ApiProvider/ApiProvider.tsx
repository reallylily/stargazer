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

const ApiProvider: React.FC<Props> = ({ children }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { cacheTime: CACHE_TIME, refetchOnMount: false, refetchOnWindowFocus: false, retry: false },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ApiProvider;
