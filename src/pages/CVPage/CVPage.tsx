import * as React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/CVPageRelated/Footer/Footer';
import SideMenu from '../../components/CVPageRelated/SideMenu/SideMenu';
import styles from './CVPage.module.scss';
import ExpCV from '../../components/CVPageRelated/ExpCV/ExpCV';
import BasicInfo from '../../components/CVPageRelated/BasicInfo/BasicInfo';

function CVPage() {
  return (
    <div className={styles.page}>
      <Header/>
      {/* <div className={styles.main}>
        <SideMenu/>
        <BasicInfo/>
      </div> */}
      <div className={styles.main}>
        <SideMenu/>
        <ExpCV title='수업활동'/>
      </div>
      <Footer buttonText='저장'/>
    </div>
  );
}

export default CVPage;