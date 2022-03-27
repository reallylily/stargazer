import React from 'react';

import Stars from 'components/Stars/Stars';

// import styles from './App.module.scss';

export const Home: React.FC = () => {
  return (
    <div className="Home">
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
