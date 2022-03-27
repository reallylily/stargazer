import React from 'react';

import styles from './Topic.module.scss';
import useSearch from 'api/search/useSearch';
import Select from 'components/Select/Select';
import Loading from 'pages/Loading/Loading';

export const Topic: React.FC = () => {
  // const { data, isLoading, search } = useSearch();

  // const [searchTerm, setSearchTerm] = React.useState<string>('react');
  // const clickHandler = () => {
  //   search(searchTerm);
  // };

  // if (isLoading) {
  //   return <Loading />;
  // }

  // console.log(data);

  return (
    <div>
      {/* <div className={styles.search}>
        <Select setSearchTerm={setSearchTerm} />
        <button className={styles.button} type="button" onClick={clickHandler}>
          Search
        </button>
      </div>
      {data && <div>{data.topic?.name}</div>} */}
    </div>
  );
};

export default Topic;
