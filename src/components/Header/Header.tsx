import * as React from 'react';
import styles from './Header.module.scss'
import logo from '../../assets/jobda_logo.svg'

import useHover from '../../customHooks/useHover';
import PopUpNav from '../PopUpNav/PopUpNav';

function Header() {

  const [hoverRef, isHovered] = useHover();

	return (
	<>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logo} alt="" />
        <div className={styles.nav}>
          <p className={styles.navText}>채용공고</p>
          <p className={styles.navText} ref={hoverRef}>마이페이지</p>
        </div>
      </div>
    </div>
    { isHovered && <PopUpNav/> }
	</>
	);
}

export default Header;