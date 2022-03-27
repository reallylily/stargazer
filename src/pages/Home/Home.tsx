import React from 'react';

import styles from './Home.module.scss';
import Search from 'components/Search/Search';
import Stars from 'components/Stars/Stars';

export const Home: React.FC = () => {
  return (
    <div className="Home">
      <Search />
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
