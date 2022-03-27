import React from 'react';

import styles from './Stars.module.scss';

export class Stars extends React.PureComponent {
  render() {
    return (
      <div>
        <div className={styles.stars} />
        <div className={styles.stars2} />
        <div className={styles.stars3} />
      </div>
    );
  }
}

export default Stars;
