import React from 'react';

import styles from './Topic.module.scss';
import { Topic as TopicProp } from 'api/search/types';
import { AiFillStar } from 'react-icons/ai';

export type Props = {
  topic: TopicProp | null;
};

export const Topic: React.FC<Props> = (props: Props) => {
  const { topic } = props;

  if (!topic) {
    return (
      <div className={styles.topic}>
        We couldnt find a topic with that name!
        <br />
        <br />
        Try searching for a popular topic from the dropdown
      </div>
    );
  }

  const { name, stargazerCount } = topic;
  return (
    <div className={styles.topic}>
      <div>
        <div className={styles.name}>{name}</div>
        <a href={`https://github.com/topics/${name}`} target="_blank" rel="noreferrer" className={styles.link}>
          Read more on Github
        </a>
      </div>
      <div>
        <AiFillStar /> {stargazerCount} stargazers
      </div>
    </div>
  );
};

export default Topic;
