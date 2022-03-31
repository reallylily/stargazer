import React from 'react';

import styles from './RelatedItem.module.scss';
import { Topic } from 'api/search/types';
import { AiFillStar } from 'react-icons/ai';

export type Props = {
  topic: Topic;
  search: React.Dispatch<React.SetStateAction<string>>;
};

export const RelatedItem: React.FC<Props> = (props: Props) => {
  const { topic, search } = props;

  const { name, stargazerCount } = topic;

  const clickHandler = () => {
    search(name);
  };

  return (
    <div className={styles.topic}>
      <div>
        <button className={styles.button} type="button" onClick={clickHandler}>
          {name}
        </button>
      </div>
      <div>
        <AiFillStar /> {stargazerCount} stargazers
      </div>
    </div>
  );
};

export default RelatedItem;
