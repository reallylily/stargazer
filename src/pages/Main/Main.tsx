import React from 'react';

import useSearch from 'api/search/useSearch';
import Stars from 'components/stars/stars';

// import styles from './App.module.scss';

const Main: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>('react');
  const { data, isLoading, isFetched, error, reload } = useSearch(searchTerm);

  return (
    <div className="Main">
      {console.log(data?.topic?.name, isLoading, error)}
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
      <Stars />
    </div>
  );
};

export default Main;
