import * as React from 'react';
import { useState } from 'react';
import AddDelBtn from '../AddDelBtn/AddDelBtn';
import ExpTable from '../ExpTable/ExpTable';
import styles from './ExpCV.module.scss';

interface Props{
  title: string
}

function ExpCV({title}:Props) {
  // exp tables
  const exptables = [0];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
        {
          exptables.map((num) =>
            <ExpTable key={num}/>
          )
        }
        <AddDelBtn firstbtn='활동 추가' secondbtn='활동 삭제'/>
      </div>
    </div>
  );
}

export default ExpCV;