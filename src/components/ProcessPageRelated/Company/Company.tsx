import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './Company.module.scss';

interface Props{
  logo: any,
  name: string,
  job: string,
  link: string,
  description: string
}

function Company({logo, name, job, link, description}:Props) {
  return (
    <>
    <div className={styles.container}>
      <img src={logo} alt={name} />
      <div className={styles.text}>
        <div className={styles.title}>
          <p className={styles.company}>{`${name}\u00A0-\u00A0`}</p>
          <p className={styles.job}>{`${job}\u00A0`}</p>
          <a href={link} target='_blank' style={{ textDecoration: 'none', color: 'black'}}>π</a>
        </div>
        <div className={styles.description}>
          <p className={styles.recom}> μ‘λ€ μΆμ² μ΄μ  : </p>
          <p className={styles.reason}>{description}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Company;