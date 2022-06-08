import * as React from 'react';
import DropList from '../../DropList/DropList';
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
              <input className={styles.name} type="text" value='김도연' placeholder='이름'/>
              <input className={styles.sex} type="text" value='여성' placeholder='성별'/>
              <input className={styles.age} type="number" value='24' placeholder='나이(ex. 24)' />
              <input className={styles.phone} type='text' value='010-1234-5678' placeholder='연락처(ex. 010-1234-5678)'/>
            </div>
          </div>

          {/* 학력정보 */}
          <div className={styles.info}>
            <p className={styles.infotitle}>학력 정보</p>
            <div className={styles.secondgrid}>
              <p className={styles.snu}>서울대학교</p>
              <input className={styles.college} value='사회과학대학' type="text" placeholder='단과대학'/>
              <input className={styles.college} value='정치외교학부 정치학 전공' type="text" placeholder='학과(ex. 정치외교학부 정치학 전공)'/>
              <input className={styles.state} value='재학' type="text" placeholder='재학 상태'/>
            </div>
          </div>

        {/* 이메일 */}
        <div className={styles.info}>
          <p className={styles.infotitle}>이메일</p>
          <div className={styles.box}>
            <input className={styles.singleInput} value='abcdefg@snu.ac.kr' type='email' placeholder='스누메일 주소(@snu.ac.kr)' />
          </div>
        </div>

        {/* 관심분야 */}
        <div className={styles.info}>
          <p className={styles.infotitle}>관심 분야</p>
          <div className={styles.thirdgrid}>
            <input className={styles.interest} value='스포츠' type="text" placeholder='관심 분야 1(필수)'/>
            <input className={styles.interest} value='미디어' type="text" placeholder='관심 분야 2(선택)'/>
            <input className={styles.interest} value='게임' type="text" placeholder='관심 분야 3(선택)'/>
            <input className={styles.interest} type="text" placeholder='관심 분야 4(선택)'/>
          </div>
        </div>

        {/* 희망직군 */}
        <div className={styles.info}>
          <p className={styles.infotitle}>희망 직군</p>
          <div className={styles.forthgrid}>
            <div className={styles.dropdown}>
              <DropList type={3} placeholder='마케터'/>
            </div>
            <div className={styles.dropdown}>
              <DropList type={3} placeholder='기획자'/>
            </div>
            <div className={styles.dropdown}>
              <DropList type={3} placeholder='디자이너'/>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;