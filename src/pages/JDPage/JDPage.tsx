import * as React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import jdList from '../../utils/jdList';
import styles from './JDPage.module.scss';

function JDPage() {
  // jd id
  const jdId = Number(useParams().id);
  const thisJD = jdList[jdId];
  return (
  <>
  <div className={styles.page}>
    <Header/>
    <div className={styles.main}>
    <div className={styles.hello}>
      <p className={styles.title}>{thisJD.name}</p>
      <p className={styles.title}>에 대해 알려드려요 😆</p>
    </div>
    <div className={styles.thumbnail}>
      <img src={thisJD.image} />
    </div>
    <div className={styles.catch}>
      <p className={styles.phrase}>{`${thisJD.particle}\u00A0`}</p>
      <p className={styles.phrase}>{thisJD.catch}</p>
      <p className={styles.phrase}>입니다</p>
    </div>
    <pre className={styles.intro}>
      {thisJD.intro}
    </pre>
    {
      thisJD.description.map(d =>
        <>
        <p className={styles.header}>{d.title}</p>
        <pre className={styles.content}>
          {d.content}
        </pre>
        </>  
      )
    }
    </div>
  </div>
  </>
  );
}

export default JDPage;