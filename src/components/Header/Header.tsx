import * as React from 'react';
import { useState } from 'react';
import styles from './Header.module.scss'
import logo from '../../assets/jobda_logo.svg'
import PopUpNav from '../PopUpNav/PopUpNav';

function Header() {

  const [popup, setPopup] = useState<boolean>(false);
  const togglePopup = () => {
    setPopup(!popup);
  }

	return (
	<>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logo} alt="" />
        <div className={styles.nav}>
          <p className={styles.navText}>채용공고</p>
          <p className={styles.navText} onClick={togglePopup}>마이페이지</p>
        </div>
        { popup && <PopUpNav onClick={()=>togglePopup}/> }
      </div>
    </div>
	</>
	);
}

export default Header;