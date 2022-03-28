import React from 'react';
import styles from './Topic.module.scss';
import { Link } from 'react-router-dom';

import {Topic as TopicProp} from 'api/search/types';

type Props = {
  topic: TopicProp;
};

export const Topic: React.FC<Props> = (props: Props) => {
  const { topic } = props;
  // const [searchTerm, setSearchTerm] = React.useState<string>('react');
  // const clickHandler = () => {
  //   search(searchTerm);
  // };

  // if (isLoading) {
  //   return <Loading />;
  // }

  console.log(topic);


  https://github.com/topics/{name}
  return (
    

    <div className={styles.topic}>
      {/* <a href="https://github.com/topics/angular" className="no-underline d-flex flex-column flex-justify-center" data-ga-click="Explore, go to topic, text:angular; location:boxes"> */}
          <p className={styles.name} >
          <div>{topic.name}</div>
          <div>{topic.stargazerCount}</div>
         </p>
        {/* </a> */}

    </div>
  );
};

export default Topic;

