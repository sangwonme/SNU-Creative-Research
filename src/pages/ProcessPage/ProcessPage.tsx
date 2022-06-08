import * as React from 'react';
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Company from '../../components/ProcessPageRelated/Company/Company';
import ProgressBar from '../../components/ProcessPageRelated/ProgressBar/ProgressBar';
import CompanyList from '../../utils/companyList';
import styles from './ProcessPage.module.scss';

function ProcessPage() {
  // step
  const [step, setStep] = useState<number>(3);

  // select
  const [selection, setSelection] = useState<number[]>([]);
  const addSelect = (idx:number) => {
    if(selection.includes(idx)){
      selection.splice(selection.indexOf(idx), 1)
      setSelection([...selection])
    }else{
      setSelection([...selection, idx]);
    }
    console.log(selection);
  }
  const selectedStyle = {
    outlineColor: '#2679F1',
    outlineWidth: '2px'
  }

  return (
    <div className={styles.page}>
      <Header/>
      <div className={styles.main}>
        <ProgressBar step={step}/>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <p className={styles.description}>
              지원자님의 서류 내용을 바탕으로 인턴 공고를 추천드려요!
              <br/>
              추천 포지션 모두 지원해 보실 수 있고, 원하는 기업에만 지원하실 수도 있습니다. 
              <br/>
              지원을 희망하는 공고를 선정해주세요!
            </p>
            {
              CompanyList.map(c => 
                <div className={styles.companyWrapper} 
                  key={c.idx} 
                  onClick={() => addSelect(c.idx)}
                  style={selection.includes(c.idx) ? selectedStyle : {}}
                >
                  <Company logo={c.logo} name={c.name} job={c.job} link={c.link} description={c.description}/>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <Footer 
        buttonText='선택 완료' 
        color={selection.length > 0 ? '#5696F4' : '#D9D9D9'}
      />
    </div>
  );
}

export default ProcessPage;