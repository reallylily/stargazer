import React from 'react';

import styles from './Loading.module.scss';

export const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      Fetching Weather Data for your Location...
      <br />
      If this message persits please check and make sure that sharing location is permitted by your browser or select
      a location using the searchbar.
    </div>
  );
};

export default Loading;
