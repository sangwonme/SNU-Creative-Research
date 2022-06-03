import * as React from 'react';
import styles from './HomePage.module.scss';
import logo from '../../assets/jobda_logo.png';

function HomePage() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.button}>
        <p className={styles.buttonText}> 구직하러 가기 </p>
      </div>
    </div>
  );
}

export default HomePage;