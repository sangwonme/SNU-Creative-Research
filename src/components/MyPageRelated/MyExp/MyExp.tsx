import * as React from 'react';
import Keyword from '../Keyword/Keyword';
import styles from './MyExp.module.scss';

interface Props{
  exp: string,
  title: string,
  keywords: string[],
  description: string[]
}

function MyExp({exp, title, keywords, description}: Props) {
  // description
  const number = [0,1,2,3];
  const labels = ['활동 개요', '나의 노력', '나의 성과', '깨달음'];

  return (
  <>
  <div className={styles.container}>
    <p className={styles.exp}>{exp}</p>
    <p className={styles.title}>{title}</p>
    <div className={styles.keywords}>
      {
        keywords.map(key => 
          <Keyword text={key} bold={false} />  
        )
      }
    </div>
    {
      number.map(i =>
        <div className={styles.description}>
          <p className={styles.label}>{labels[i]}</p>
          <p className={styles.text}>{description[i]}</p>
        </div>
      )
    }
  </div>
  </>
  );
}

export default MyExp;