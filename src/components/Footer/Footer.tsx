import * as React from 'react';
import Button from '../CVPageRelated/Button/Button';
import styles from './Footer.module.scss';

interface Props{
  buttonText: string,
  color: string,
  onClick: any
}

function Footer({buttonText, color, onClick}: Props) {

  return (
    <>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Button text={buttonText} color={color} onClick={onClick}/>
      </div>
    </div>
    </>
  );
}

export default Footer;