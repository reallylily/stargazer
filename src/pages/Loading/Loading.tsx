import React from 'react';

import styles from './Loading.module.scss';

export const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      Catching Stars for your Selection...
      <br />
      <p>If this message persits please try reloading</p>
    </div>
  );
};

export default Loading;
