import React from 'react';

import styles from './Topic.module.scss';
import useSearch from 'api/search/useSearch';
import Loading from 'pages/Loading/Loading';

export const Topic: React.FC = () => {
  const { data, isLoading, search } = useSearch();

  const clickHandler = () => {
    search('github');
  };

  if (isLoading) {
    return <Loading />;
  }

  // if (!isLoading && !data) {
  //   return <div>Sorry no topics availible for that search</div>;
  // }
  // console.log(data);
  return (
    <div className={styles.search}>
      {data && <div>{data.topic?.name}</div>}
      <button className={styles.button} type="button" onClick={clickHandler}>
        Search
      </button>
    </div>
  );
};

export default Topic;
