import * as React from 'react';
import Button from '../CVPageRelated/Button/Button';
import styles from './Footer.module.scss';

interface Props{
  buttonText: string
}

function Footer({buttonText}: Props) {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Button text={buttonText}/>
      </div>
    </div>
    </>
  );
}

export default Footer;