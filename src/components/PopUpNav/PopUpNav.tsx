import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './PopUpNav.module.scss';

interface Props{
  onClick: ()=>{}
}

function PopUpNav({onClick}: Props) {
  return (
    <>
      <div className={styles.container} onClick={onClick}>
        <div className={styles.box}>
          <div className={styles.navlist}>
            <p className={styles.navText}>나의 지원서</p>
            <Link to={'/editcv/0'} style={{ textDecoration: 'none', color: 'black'}}>
              <p className={styles.navText}>나의 지원서 관리</p>
            </Link>
            <Link to={'/progress'} style={{ textDecoration: 'none', color: 'black'}}>
              <p className={styles.navText}>일정 관리</p>
            </Link>
            <p className={styles.navText}>로그아웃</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUpNav;