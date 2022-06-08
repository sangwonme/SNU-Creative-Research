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
  const [exptables, setExptables] = useState<number[]>([0]);
  const addTable = () => {
    // console.log(exptables);
    // setExptables([...exptables, 0]);
    // console.log(exptables);
    console.log('hi');
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
        {
          exptables.map((num) =>
            <ExpTable key={num}/>
          )
        }
        <AddDelBtn addPreseed={()=>addTable}/>
      </div>
    </div>
  );
}

export default ExpCV;