import * as React from 'react';
import Keyword from '../Keyword/Keyword';
import styles from './Profile.module.scss';

function Profile() {
  // keywords
  const wantjobKey = ['마케터', '기획자', '디자이너'];
  const interestKey = ['스포츠', '미디어', '게임'];
  const skillKey = ['산업리서치', '데이터 분석', 'Slack'];


  return (
    <>
    <div className={styles.container}>
      <div className={styles.wrapper}>
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
            <p className={styles.label}>희망 직군</p>
            <div className={styles.keywords}>
              {
                wantjobKey.map(key =>
                  <Keyword text={key} bold={true}/>  
                )
              }
            </div>
          </div>
        </div>

        <div className={styles.keyword}>
          <div className={styles.category}>
            <p className={styles.label}>관심 분야</p>
            <div className={styles.keywords}>
              {
                interestKey.map(key =>
                  <Keyword text={key} bold={false}/>  
                )
              }
            </div>
          </div>
        </div>

        <div className={styles.keyword}>
          <div className={styles.category}>
            <p className={styles.label}>역량 및 스킬</p>
            <div className={styles.keywords}>
              {
                skillKey.map(key =>
                  <Keyword text={key} bold={false}/>  
                )
              }
            </div>
          </div>
        </div>

        <div className={styles.contact}>
          <p className={styles.label}>연락처</p>
          <p className={styles.address}>010-1234-5678</p>
        </div>

        <div className={styles.contact}>
          <p className={styles.label}>이메일</p>
          <p className={styles.address}>abcdefg@snu.ac.kr</p>
        </div>

      </div>

    </div>
    </>
  );
}

export default Profile;