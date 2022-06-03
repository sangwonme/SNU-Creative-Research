import * as React from 'react';
import styles from './ProgressBar.module.scss';
import check from '../../assets/check.png';

interface Props{
  level: number
}

function ProgressBar({level}: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.dates}>
          <p className={styles.date}>2022.06.01</p>
          {level > 1 && <p className={styles.date}>2022.06.03</p>}
          {level > 2 && <p className={styles.date}>2022.06.04</p>}
          {level > 3 && <p className={styles.date}>2022.06.06</p>}
          {level > 4 && <p className={styles.date}>2022.06.07</p>}
          {level > 5 && <p className={styles.date}>2022.06.10</p>}
        </div>
        <div className={styles.circles}>
          <div className={styles.bar}></div>
          <div className={styles.circle}>
            <img className={styles.check} src={check}/>
          </div>
          <div className={styles.circle}>
            {level > 1 && <img className={styles.check} src={check}/>}
          </div>
          <div className={styles.circle}>
            {level > 2 && <img className={styles.check} src={check}/>}
          </div>
          <div className={styles.circle}>
            {level > 3 && <img className={styles.check} src={check}/>}
          </div>
          <div className={styles.circle}>
            {level > 4 && <img className={styles.check} src={check}/>}
          </div>
          <div className={styles.circle}>
            {level > 5 && <img className={styles.check} src={check}/>}
          </div>
        </div>
        <div className={styles.processes}>
          <p className={styles.process}>1단계</p>
          <p className={styles.process}>2단계</p>
          <p className={styles.process}>3단계</p>
          <p className={styles.process}>4단계</p>
          <p className={styles.process}>5단계</p>
          <p className={styles.process}>6단계</p>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;