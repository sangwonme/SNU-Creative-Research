import * as React from 'react';
import ExpTable from '../ExpTable/ExpTable';
import styles from './ExpCV.module.scss';

interface Props{
  title: string
}

function ExpCV({title}:Props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
        <ExpTable/>
      </div>
    </div>
  );
}

export default ExpCV;