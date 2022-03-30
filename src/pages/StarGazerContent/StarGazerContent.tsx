import React from 'react';

import styles from './StarGazerContent.module.scss';
import useSearch from 'api/search/useSearch';
import Search from 'components/Search/Search';
import Stars from 'components/Stars/Stars';
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
      <div className={styles.stargazer}>
        <div className="title">STARGAZER by LILY</div>
        <Search search={search} />
        {data && <Topic topic={data?.topic} />}
        {/* 
        StarGazerContent
          Search 
            SearchBar *react-select 
              autocomplete
            SearchButton
          Topic
            name
            link to github
            stargazer count
          RelatedTopicList
            RelatedItem
              name
              StargazerCount
              link to search
            RelatedItem
            RelatedItem
 

        LoadingPage
      */}

        <Stars />
      </div>
    </div>
  );
};

export default StarGazerContent;
