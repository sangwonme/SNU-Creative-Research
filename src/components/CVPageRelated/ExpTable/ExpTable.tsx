import * as React from 'react';
import styles from './ExpTable.module.scss';

function ExpTable() {
  // drop down list options
  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];


  return (
    <>
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.expName}>
          <input className={styles.input} type="text" placeholder='활동명'/>
          <p>Dropdownlist</p>
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>활동 개요</p>
          <input className={styles.input} type="text" placeholder='활동 개요 및 문제 상황' />
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>나의 노력</p>
          <input className={styles.input} type="text" placeholder='문제를 해결한 / 상황을 개선한 나의 노력' />
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>나의 성과</p>
          <input className={styles.input} type="text" placeholder='문제가 해결된 / 상황이 개선된 결과' />
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>깨달음</p>
          <input className={styles.lastInput} type="text" placeholder='이 활동에서 내가 얻은 깨달음' />
        </div>
      </div>
    </div>
    </>


  );
}

export default ExpTable;