import * as React from 'react';
import expList from '../../../utils/expList';
import MyExp from '../MyExp/MyExp';
import styles from './MyCV.module.scss';

function MyCV() {
  return (
  <>
  <div className={styles.container}>
    <div className={styles.wrapper}>
      {
        expList.map(exp => 
         <MyExp exp={exp.exp} title={exp.title} keywords={exp.keywords} description={exp.description}/> 
        )
      }
    </div>
  </div>
  </>
  );
}

export default MyCV;