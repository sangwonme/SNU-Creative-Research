import * as React from 'react';
import Header from '../../components/Header/Header';
import MyCV from '../../components/MyPageRelated/MyCV/MyCV';
import Profile from '../../components/MyPageRelated/Profile/Profile';
import styles from './MyPage.module.scss';

function MyPage() {
  return (
  <>
  <div className={styles.page}>
    <Header/>
    <div className={styles.main}>
      <Profile/>
      <MyCV/>
    </div>
  </div>
  </>
  );
}

export default MyPage;