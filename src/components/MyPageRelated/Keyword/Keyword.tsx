import * as React from 'react';
import styles from './Keyword.module.scss';

interface Props{
  text: string,
  bold: boolean
}

function Keyword({text, bold}: Props) {
  // bold
  const boldStyle = {
    fontWeight: 600
  }

  return (
  <>
  <div className={styles.box}>
    <p className={styles.text} style={bold ? boldStyle : {}}>{text}</p>
  </div>
  </>
  );
}

export default Keyword;