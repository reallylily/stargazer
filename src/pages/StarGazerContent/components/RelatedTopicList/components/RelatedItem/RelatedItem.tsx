import { AxiosError } from 'axios';
import React from 'react';

import styles from './RelatedItem.module.scss';
import ApiTopic, { Topic } from 'api/search/types';
import { AiFillStar } from 'react-icons/ai';
import { UseMutateFunction } from 'react-query/types/react/types';

type Props = {
  topic: Topic;
  search: UseMutateFunction<ApiTopic, AxiosError, string>;
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
