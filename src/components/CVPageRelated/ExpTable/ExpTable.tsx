import * as React from 'react';
import { useState } from 'react';
import DropList from '../../DropList/DropList';
import styles from './ExpTable.module.scss';

function ExpTable() {
  
  return (
    <>
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.expName}>
          <input className={styles.input} placeholder='활동명'/>
          <div className={styles.tmp}>
            <DropList type={1} placeholder='dkdk'/>
          </div>
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>활동 개요</p>
          <textarea className={styles.input} placeholder='활동 개요 및 문제 상황' />
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>나의 노력</p>
          <textarea className={styles.input} placeholder='문제를 해결한 / 상황을 개선한 나의 노력' />
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>나의 성과</p>
          <textarea className={styles.input} placeholder='문제가 해결된 / 상황이 개선된 결과' />
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>깨달음</p>
          <textarea className={styles.lastInput && styles.input} placeholder='이 활동에서 내가 얻은 깨달음' />
        </div>
      </div>
    </div>
    </>


  );
}

export default ExpTable;