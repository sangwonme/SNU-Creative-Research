import * as React from 'react';
import styles from './AddDelBtn.module.scss';

interface Props{
  firstbtn: string,
  secondbtn: string
}

function AddDelBtn({firstbtn, secondbtn}:Props) {

  return (
    <>
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.add}>{firstbtn}</div>
        <div className={styles.del}>{secondbtn}</div>
      </div>
    </div>
    </>
  );
}

export default AddDelBtn;