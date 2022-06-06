import * as React from 'react';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './CVPage.module.scss';

function CVPage() {
  return (
    <div className={styles.page}>
      <Header/>
      <div className={styles. main}>
        <SideMenu/>
      </div>
    </div>
  );
}

export default CVPage;