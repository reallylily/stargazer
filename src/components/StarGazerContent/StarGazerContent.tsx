import React from 'react';

import styles from './StarGazerContent.module.scss';
import useSearch from 'api/search/useSearch';
import Select from 'components/Select/Select';
import Loading from 'pages/Loading/Loading';

export const StarGazerContent: React.FC = () => {
  const { data, isLoading, search } = useSearch();

  const [searchTerm, setSearchTerm] = React.useState<string>('react');
  const clickHandler = () => {
    search(searchTerm);
  };

  if (isLoading) {
    return <Loading />;
  }

  // if (!isLoading && !data) {
  //   return <div>Sorry no StarGazerContents availible for that search</div>;
  // }
  console.log(data);

  return (
    <div>
      <div className={styles.search}>
        <Select setSearchTerm={setSearchTerm} />
        <button className={styles.button} type="button" onClick={clickHandler}>
          Search
        </button>
      </div>
      {data && <div>{data.topic?.name}</div>}
    </div>
  );
};

export default StarGazerContent;
