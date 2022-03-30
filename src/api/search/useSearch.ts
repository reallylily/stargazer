import { AxiosError } from 'axios';
import { useQuery, useQueryClient } from 'react-query';

import { getSearch } from './search';
import { ApiTopic } from './types';
import { getFriendlyError } from 'utils/error';

export const QUERY_KEY = 'search';
export interface UseSearch {
  data?: ApiTopic;
  error?: string;
  isLoading: boolean;
  clear: () => void;
}

export const useSearch = (name = 'react'): UseSearch => {
  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries(QUERY_KEY);
  };

  const { data, error, isLoading } = useQuery<ApiTopic, AxiosError, ApiTopic>(
    [QUERY_KEY, name],
    () => getSearch(name),
    {},
  );

  return {
    data,
    error: getFriendlyError(error, 'topics'),
    isLoading,
    clear: invalidateQueries,
  };
};

export default useSearch;
