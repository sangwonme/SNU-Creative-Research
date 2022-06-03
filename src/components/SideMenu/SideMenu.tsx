import * as React from 'react';
import styles from './SideMenu.module.scss';

function SideMenu() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>나의 지원서 관리</p>
        <p className={styles.basicInfo}>기본 정보</p>
        <div className={styles.category}>
          <p className={styles.categoryTitle}>경험</p>
          <p className={styles.subnav}>수업 활동</p>
          <p className={styles.subnav}>동아리·학회·대외 활동</p>
          <p className={styles.subnav}>인턴·경력</p>
        </div>
        <div className={styles.category}>
          <p className={styles.categoryTitle}>기타</p>
          <p className={styles.subnav}>사용 가능한 스킬</p>
          <p className={styles.subnav}>어학 성적·자격증·수상 경력</p>
        </div>
      </div>
    </>
  );
}

export default SideMenu;