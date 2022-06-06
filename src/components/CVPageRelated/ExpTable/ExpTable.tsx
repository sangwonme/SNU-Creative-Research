import * as React from 'react';
import { useState } from 'react';
import styles from './ExpTable.module.scss';

function ExpTable() {
  // drop down list options
  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];

  // keyword
  const [useDrop, setUseDrop] = useState<boolean>(false);
  const toggleDrop = () => {
    setUseDrop(!useDrop);
  }
  const keywords = [
    '겸손함', '성실', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'
  ];

  // update keyword
  const [keyword, setKeyword] = useState<string>('활동에서 보여준 강점 키워드');
  const updateKeyword = (word: string) => {
    toggleDrop();
    setKeyword(word);
  }
  
  return (
    <>
    <div className={styles.container}>
      <div className={styles.grid}>
        {
          useDrop &&
          <div className={styles.listBox}>
            {
              keywords.map((word) => 
                <p 
                  className={styles.keyword}
                  onClick={() => updateKeyword(word)}
                >
                {word}
                </p>
              )
            }
          </div>
        }
        <div className={styles.expName}>
          <input className={styles.input} type="text" placeholder='활동명'/>
          <p className={styles.dropdown} onClick={toggleDrop}>{keyword}{useDrop? '▲' : '▼'}</p>
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>활동 개요</p>
          <input className={styles.input} type="text" placeholder='활동 개요 및 문제 상황' />
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>나의 노력</p>
          <input className={styles.input} type="text" placeholder='문제를 해결한 / 상황을 개선한 나의 노력' />
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>나의 성과</p>
          <input className={styles.input} type="text" placeholder='문제가 해결된 / 상황이 개선된 결과' />
        </div>
        <div className={styles.expInfo}>
          <p className={styles.label}>깨달음</p>
          <input className={styles.lastInput} type="text" placeholder='이 활동에서 내가 얻은 깨달음' />
        </div>
      </div>
    </div>
    </>


  );
}

export default ExpTable;