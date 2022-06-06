import * as React from 'react';
import styles from './Button.module.scss';

interface Props{
  text: string
}

function Button({text}: Props) {
  return (
    <>
      <div className={styles.box}>
        <p className={styles.text}>
          {text}
        </p>
      </div>
    </>
  );
}

export default Button;