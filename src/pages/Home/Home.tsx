import React from 'react';

import styles from './Home.module.scss';
import Stars from 'components/Stars/Stars';
import Topic from 'components/Topic/Topic';

export const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className="title">STARGAZER by LILY</div>
      <Topic />
      {/* 
        Search
          search bar *react-select 
            autocomplete
            debounce
          Topic
            info
            link to github
          TopicList
            Topic 
              StargazerCount
              link to search
            Topic 
            Topic 

        LoadingPage
      */}
      <Stars />
    </div>
  );
};

export default Home;
