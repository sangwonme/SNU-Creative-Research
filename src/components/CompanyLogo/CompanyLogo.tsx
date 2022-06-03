import * as React from 'react';
import styles from './CompanyLogo.module.scss';

interface Props{
  name: string,
  logo: any
}

function CompanyLogo({name, logo}: Props) {
  return (
    <>
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <img src={logo} alt="" />
    </div>
    </>
  );
}

export default CompanyLogo;