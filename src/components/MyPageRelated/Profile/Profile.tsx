import * as React from 'react';
import styles from './Profile.module.scss';

function Profile() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.profile}>
        <p className={styles.name}>김도연</p>
        <p className={styles.agesex}>24세 여성</p>
      </div>
      <div className={styles.school}>
        <p className={styles.snu}>서울대학교 사회과학대학</p>
        <p className={styles.major}>정치외교학부 정치학 전공 재학</p>
      </div>
      <div className={styles.keyword}>
        <div className={styles.category}>
          <p className={styles.label}></p>
          <div className={styles.keywords}>

          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default Profile;