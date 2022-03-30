import React from 'react';

import styles from './StarGazerContent.module.scss';
import useSearch from 'api/search/useSearch';
import RelatedTopicList from 'components/RelatedTopicList/RelatedTopicList';
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

  return (
    <div>
      <div className={styles.stargazer}>
        <div>STARGAZER by LILY</div>
        <Search search={search} />
        {data && <Topic topic={data.topic} />}
        {data && <RelatedTopicList relatedTopics={data.topic?.relatedTopics || []} search={search} />}

        <Stars />
      </div>
    </div>
  );
};

export default StarGazerContent;
