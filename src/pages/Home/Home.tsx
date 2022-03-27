import React from 'react';

import styles from './Home.module.scss';
import { StarGazerContent } from 'components/StarGazerContent/StarGazerContent';
import { Stars } from 'components/Stars/Stars';

export const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className="title">STARGAZER by LILY</div>
      <StarGazerContent />
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
  );
};

export default Home;
