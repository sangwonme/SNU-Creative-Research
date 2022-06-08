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
          <a href={link} style={{ textDecoration: 'none', color: 'black'}}>
            <p className={styles.company}>{`${name}\u00A0-\u00A0`}</p>
          </a>
          <p className={styles.job}>{`${job} 🔗`}</p>
        </div>
        <div className={styles.description}>
          <p className={styles.recom}> 잡다 추천 이유 : </p>
          <p className={styles.reason}>{description}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Company;