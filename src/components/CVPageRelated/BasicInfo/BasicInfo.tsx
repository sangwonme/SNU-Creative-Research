import * as React from 'react';
import styles from './BasicInfo.module.scss';

function BasicInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>기본 정보</p>
        <div className={styles.infowrapper}>

          {/* 인적사항 */}
          <div className={styles.info}>
            <p className={styles.infotitle}>인적 사항</p>
            <div className={styles.firstgrid}>
              <input className={styles.name} type="text" placeholder='이름'/>
              <div className={styles.dropdown}>

              </div>
              <input className={styles.age} type="number" placeholder='나이(ex. 24)' />
              <input className={styles.phone} type='text' placeholder='연락처(ex. 010-1234-5678)'/>
            </div>
          </div>

          {/* 학력정보 */}
          <div className={styles.info}>
            <p className={styles.infotitle}>학력 정보</p>
            <div className={styles.secondgrid}>
              <p className={styles.snu}>서울대학교</p>
              <input className={styles.college} type="text" placeholder='단과대학'/>
              <input className={styles.college} type="text" placeholder='학과(ex. 정치외교학부 정치학 전공)'/>
              <div className={styles.dropdown}>

              </div>
            </div>
          </div>

        {/* 이메일 */}
        <div className={styles.info}>
          <p className={styles.infotitle}>이메일</p>
          <div className={styles.box}>
            <input className={styles.singleInput} type='email' placeholder='스누메일 주소(@snu.ac.kr)' />
          </div>
        </div>

        {/* 관심분야 */}
        <div className={styles.info}>
          <p className={styles.infotitle}>관심 분야</p>
          <div className={styles.box}>
            <input className={styles.singleInput} type='text' />
          </div>
          <div className={styles.box}>
            <input className={styles.singleInput} type='text' />
          </div>
        </div>

        {/* 희망직군 */}
        <div className={styles.info}>
          <p className={styles.infotitle}>희망 직군</p>
          <div className={styles.box}>
            <input className={styles.singleInput} type='text' />
          </div>
          <div className={styles.box}>
            <input className={styles.singleInput} type='text' />
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default BasicInfo;