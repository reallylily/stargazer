import React from 'react';

import ApiTopic from 'api/search/types';

type Props = {
  topic?: ApiTopic;
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

  return (
    <div>
      {/* <div className={styles.search}>
        <Select setSearchTerm={setSearchTerm} />
        <button className={styles.button} type="button" onClick={clickHandler}>
          Search
        </button>
      </div>
      {data && <div>{data.topic?.name}</div>} */}
    </div>
  );
};

export default Topic;
