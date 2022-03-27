import React from 'react';

import useSearch from 'api/search/useSearch';
import Loading from 'pages/Loading/Loading';

import styles from './Search.module.scss';

export const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>();
  const { data, isLoading, isFetched, error, reload } = useSearch(searchTerm);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={styles.search}>
      {isFetched && <div>{data?.topic?.name}</div>}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setSearchTerm('github');
          reload();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
