import { AxiosError } from 'axios';
import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';

import { getSearch } from './search';
import { ApiTopic } from './types';
import { getFriendlyError } from 'utils/error';

export const QUERY_KEY = 'search';
export interface UseSearch {
  data?: ApiTopic;
  error?: string;
  isLoading: boolean;
  search: UseMutateFunction<ApiTopic, AxiosError, string>;
  clear: () => void;
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
