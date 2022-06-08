import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DropList from '../../DropList/DropList';
import styles from './ExpTable.module.scss';
import expList from '../../../utils/expList';

function ExpTable() {
  
  // thisExp
  const expId = Number(useParams().id);
  const thisExp = expList[expId-1];

  // input
  const [title, setTitle] = useState<string>(thisExp.title);
  const onChangeTitle = (event:any) => {
    setTitle(event.target.value);
  };
  const [desc1, setDesc1] = useState<string>(thisExp.description[0]);
  const onChangeDesc1 = (event:any) => {
    setDesc1(event.target.value);
  }
  const [desc2, setDesc2] = useState<string>(thisExp.description[1]);
  const onChangeDesc2 = (event:any) => {
    setDesc2(event.target.value);
  }
  const [desc3, setDesc3] = useState<string>(thisExp.description[2]);
  const onChangeDesc3 = (event:any) => {
    setDesc3(event.target.value);
  }
  const [desc4, setDesc4] = useState<string>(thisExp.description[3]);
  const onChangeDesc4 = (event:any) => {
    setDesc4(event.target.value);
  }

  useEffect(() => {
    setTitle(expList[expId-1].title);
    setDesc1(expList[expId-1].description[0]);
    setDesc2(expList[expId-1].description[1]);
    setDesc3(expList[expId-1].description[2]);
    setDesc4(expList[expId-1].description[3]);
  }, [expId]
  );

  return (
    <>
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.expName}>
          <input className={styles.input} value={title} onChange={onChangeTitle} placeholder='활동명'/>
          <div className={styles.dropdown1}>
            <DropList type={2} placeholder='활동에서 보여준 스킬 키워드'/>
          </div>
          <div className={styles.dropdown2}>
            <DropList type={1} placeholder='강점 키워드'/>
          </div>
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>활동 개요</p>
          <textarea className={styles.input} value={desc1} onChange={onChangeDesc1} placeholder='활동 개요 및 문제 상황' />
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>나의 노력</p>
          <textarea className={styles.input} value={desc2} onChange={onChangeDesc2} placeholder='문제를 해결한 / 상황을 개선한 나의 노력' />
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>나의 성과</p>
          <textarea className={styles.input} value={desc3} onChange={onChangeDesc3} placeholder='문제가 해결된 / 상황이 개선된 결과' />
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>깨달음</p>
          <textarea className={styles.lastInput && styles.input} value={desc4} onChange={onChangeDesc4} placeholder='이 활동에서 내가 얻은 깨달음' />
        </div>
      </div>
    </div>
    </>


  );
}

export default ExpTable;