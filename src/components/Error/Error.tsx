import { Alert } from '@mui/material';
import React from 'react';

import styles from './Error.module.scss';

export type Props = {
  error?: string;
};

export const Error: React.FC<Props> = (props: Props) => {
  const { error } = props;
  return <div className={styles.error}>{error && <Alert severity="error">{error}</Alert>}</div>;
};

export default Error;
