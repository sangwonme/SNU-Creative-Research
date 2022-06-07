import * as React from 'react';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProcessPageRelated/ProgressBar/ProgressBar';
import styles from './ProcessPage.module.scss';

function ProcessPage() {
  return (
    <div className={styles.page}>
      <Header/>
      <div className={styles.main}>
        <ProgressBar/>
      </div>


    </div>
  );
}

export default ProcessPage;