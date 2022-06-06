import * as React from 'react';
import CompanyLogo from '../../components/CompanyLogo/CompanyLogo';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import styles from './ProcessPage.module.scss';
import logo1 from '../../assets/jobda_logo.png';
import Header from '../../components/Header/Header';

function ProcessPage() {
  return (
    <div className={styles.page}>
      <Header/>
      <div className={styles.wrapper}>
        <p className={styles.title}>일정 관리</p>

        <div className={styles.progress}>
          <div className={styles.company}>
            <CompanyLogo name={'차트메트릭'} logo={logo1}/>
          </div>
          <div className={styles.bar}>
            <ProgressBar level={3}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProcessPage;