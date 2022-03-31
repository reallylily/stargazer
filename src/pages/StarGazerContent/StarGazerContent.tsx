import React from 'react';

import styles from './StarGazerContent.module.scss';
import useSearch from 'api/search/useSearch';
import Error from 'components/Error/Error';
import Stars from 'components/Stars/Stars';
import Loading from 'pages/Loading/Loading';
import RelatedTopicList from 'pages/StarGazerContent/components/RelatedTopicList/RelatedTopicList';
import Search from 'pages/StarGazerContent/components/Search/Search';
import Topic from 'pages/StarGazerContent/components/Topic/Topic';

export const StarGazerContent: React.FC = () => {
  const [name, setName] = React.useState<string>('react');

  const { data, isLoading, error } = useSearch(name);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.stargazer}>
      <Error error={error} />
      <div>STARGAZER by LILY</div>
      <Search search={setName} />
      {data && <Topic topic={data.topic} />}
      {data && <RelatedTopicList relatedTopics={data.topic?.relatedTopics || []} search={setName} />}

      <Stars />
    </div>
  );
};

export default StarGazerContent;
