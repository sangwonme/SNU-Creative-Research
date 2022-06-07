import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './SideMenu.module.scss';

interface Props{
  selectedId: number
}

function SideMenu({selectedId}: Props) {
  // style
  const bold = {
    fontWeight: 700
  };

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>나의 지원서 관리</p>
        <div className={styles.category}>
          <Link to={'/editcv/0'} style={{ textDecoration: 'none', color: 'black'}}>
            <p className={styles.basicInfo} style={selectedId == 0 ? bold : {}}>기본정보</p>
          </Link>
        </div>
        <div className={styles.category}>
          <p className={styles.categoryTitle}>경험</p>
          <Link to={'/editcv/1'} style={{ textDecoration: 'none', color: 'black'}}>
            <p className={styles.subnav} style={selectedId == 1 ? bold : {}}>📚 수업활동</p>
          </Link>
          <Link to={'/editcv/2'} style={{ textDecoration: 'none', color: 'black'}}>
            <p className={styles.subnav} style={selectedId == 2 ? bold : {}}>🗣 동아리 / 학회 / 대외활동</p>
          </Link>
          <Link to={'/editcv/3'} style={{ textDecoration: 'none', color: 'black'}}>
            <p className={styles.subnav} style={selectedId == 3 ? bold : {}}>📑 인턴 및 경력</p>
          </Link>
        </div>
        <div className={styles.category}>
          <p className={styles.categoryTitle}>기타</p>
          <Link to={'/editcv/4'} style={{ textDecoration: 'none', color: 'black'}}>
            <p className={styles.subnav} style={selectedId == 4 ? bold : {}}>🔎 사용 가능한 스킬</p>
          </Link>
          <Link to={'/editcv/5'} style={{ textDecoration: 'none', color: 'black'}}>
            <p className={styles.subnav} style={selectedId == 5 ? bold : {}}>📂 어학성적 / 자격증 / 수상경력</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideMenu;