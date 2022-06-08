import * as React from 'react';
import { useState } from 'react';
import styles from './DropList.module.scss';

interface Props{
  type: number,
  placeholder: string
}

function DropList({type, placeholder}: Props) {
  // toggle
  const [useDrop, setUseDrop] = useState<boolean>(false);
  const toggleDrop = () => {
    setUseDrop(!useDrop);
  }

  // keywords
  const [keyword, setKeyword] = useState<string>(placeholder);
  const updateKeyword = (word: string) => {
    toggleDrop();
    setKeyword(word);
  }

  const traitKeywords = ['능동적', '꼼꼼함', '성실함', '통찰력', '리더십', '소통능력', '문제 해결 능력'];
  const skillKeywords = ['1','2','3', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
  const jobKeywords = ['PM', '마케터', '디자이너', '개발자'];

  return (
  <div className={styles.container}>
    {
      useDrop &&
      <div className={styles.listBox}>
        {
          type == 1 ?
          traitKeywords.map((word) => 
            <p 
              className={styles.keyword}
              onClick={() => updateKeyword(word)}
            >
            {word}
            </p>
          ) :
          type == 2 ?
          skillKeywords.map((word) => 
            <p 
              className={styles.keyword}
              onClick={() => updateKeyword(word)}
            >
            {word}
            </p>
          ) :
          type == 3 ?
          jobKeywords.map((word) => 
            <p 
              className={styles.keyword}
              onClick={() => updateKeyword(word)}
            >
            {word}
            </p>
          ) : null
        }
      </div>
    }
    <div className={styles.dropdown} onClick={toggleDrop}>
      <p className={styles.selected} style={keyword!=placeholder ? {color: 'black'} : {}}>{keyword}</p>
      <p className={styles.arrow}>{useDrop? '▲' : '▼'}</p>
    </div>
  </div>
  );
}

export default DropList;