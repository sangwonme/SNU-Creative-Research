import * as React from 'react';
import styles from './PopUpNav.module.scss';

function PopUpNav() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.navlist}>
            <p className={styles.navText}>나의 지원서</p>
            <p className={styles.navText}>나의 지원서 관리</p>
            <p className={styles.navText}>일정 관리</p>
            <p className={styles.navText}>로그아웃</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUpNav;