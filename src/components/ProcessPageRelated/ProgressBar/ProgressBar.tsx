import * as React from 'react';
import { useState } from 'react';
import styles from './ProgressBar.module.scss';
import check from '../../../assets/check.png';

function ProgressBar() {
  // step
  const [step, setStep] = useState<number>(2);

  // style
  const greyColor = {
    backgroundColor: '#d9d9d9',
  };
  const blueColor = {
    backgroundColor: '#3E88F2',
  };
  const greyBorder = {
    borderColor: '#d9d9d9',
  };
  const blueBorder = {
    borderColor: '#3E88F2',
  };
  const greyText = {
    color: '#d9d9d9',
  };
  const blueText = {
    color: '#3E88F2',
  };


  return (
  <>
    <div className={styles.container}>
      <p className={styles.title}>일정 관리</p>
      <div className={styles.box}>
        <div className={styles.process}>
          <div className={styles.circle} style={step >= 1 ? blueColor : greyColor}>
            {step >= 1 && <img src={check}/>}
          </div>
          <p className={styles.stepname} style={step >= 1 ? blueText : greyText}>서류 제출 완료</p>
        </div>

        <div className={styles.line} style={step >= 2 ? blueBorder : greyBorder}></div>
        <div className={styles.process}>
          <div className={styles.circle} style={step >= 2 ? blueColor : greyColor}>
            {step >= 2 && <img src={check}/>}
          </div>
          <p className={styles.stepname} style={step >= 2 ? blueText : greyText}>추천 회사 리스트 생성 중</p>
        </div>

        <div className={styles.line} style={step >= 3 ? blueBorder : greyBorder}></div>
        <div className={styles.process}>
          <div className={styles.circle} style={step >= 3 ? blueColor : greyColor}>
            {step >= 3 && <img src={check}/>}
          </div>
          <p className={styles.stepname} style={step >= 3 ? blueText : greyText}>추천 완료</p>
        </div>
        
        <div className={styles.line} style={step >= 4 ? blueBorder : greyBorder}></div>
        <div className={styles.process}>
          <div className={styles.circle} style={step >= 4 ? blueColor : greyColor}>
            {step >= 4 && <img src={check}/>}
          </div>
          <p className={styles.stepname} style={step >= 4 ? blueText : greyText}>지원 회사 결정 완료</p>
        </div>

      </div>
    </div>
  </>
  );
}

export default ProgressBar;