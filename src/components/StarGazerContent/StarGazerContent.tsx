import React from 'react';

// import styles from './StarGazerContent.module.scss';
import useSearch from 'api/search/useSearch';
import Search from 'components/Search/Search';
import Topic from 'components/Topic/Topic';
import Loading from 'pages/Loading/Loading';

export const StarGazerContent: React.FC = () => {
  const {
    data,
    isLoading,
    search,
    // error
  } = useSearch();

  if (isLoading) {
    return <Loading />;
  }

  console.log(data);
  return (
    <div>
      <Search search={search} />
      {data && <Topic topic={data?.topic} />}
    </div>
  );
};

export default StarGazerContent;
