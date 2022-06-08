import * as React from 'react';
import styles from './Button.module.scss';

interface Props{
  text: string,
  color: string
}

function Button({text, color}: Props) {
  console.log(color);

  return (
    <>
      <div className={styles.box} style={{backgroundColor: color}}>
        <p className={styles.text}>
          {text}
        </p>
      </div>
    </>
  );
}

export default Button;