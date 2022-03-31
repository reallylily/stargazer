import { AxiosError } from 'axios';
import React from 'react';

import styles from './RelatedTopicList.module.scss';
import RelatedItem from './components/RelatedItem/RelatedItem';
import ApiTopic, { Topic } from 'api/search/types';
import { UseMutateFunction } from 'react-query/types/react/types';

export type Props = {
  relatedTopics: Topic[];
  search: UseMutateFunction<ApiTopic, AxiosError, string>;
};

export const RelatedTopicList: React.FC<Props> = (props: Props) => {
  const { relatedTopics, search } = props;

  const topics = relatedTopics.map((topic) => <RelatedItem topic={topic} search={search} key={topic.name} />);

  return (
    <div>
      {Boolean(topics.length) && <div className={styles.title}>Related Topics</div>}
      <ul>{topics}</ul>
    </div>
  );
};

export default RelatedTopicList;
