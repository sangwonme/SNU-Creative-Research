import * as React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/CVPageRelated/Footer/Footer';
import SideMenu from '../../components/CVPageRelated/SideMenu/SideMenu';
import styles from './CVPage.module.scss';
import ExpCV from '../../components/CVPageRelated/ExpCV/ExpCV';
import BasicInfo from '../../components/CVPageRelated/BasicInfo/BasicInfo';

function CVPage() {
  // edit id
  const editId = Number(useParams().id);

  // menus
  const menus = ['기본 정보', '수업활동', '동아리 / 학회 / 대외활동', '인턴 및 경력', '사용 가능한 스킬', '어학성적 / 자격증 / 수상경력'];



  return (
    <div className={styles.page}>
      <Header/>
      <div className={styles.main}>
        <SideMenu selectedId={editId}/>
        {
          editId == 0 ?
          <BasicInfo/> :
          <ExpCV title={menus[editId]}/>
        }
      </div>
      <Footer buttonText='저장'/>
    </div>
  );
}

export default CVPage;