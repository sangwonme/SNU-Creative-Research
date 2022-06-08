import * as React from 'react';
import DropList from '../../DropList/DropList';
import AddDelBtn from '../AddDelBtn/AddDelBtn';
import styles from './Grade.module.scss';

function Grade() {
  return (
  <>
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <p className={styles.title}>기타</p>

      <div className={styles.category}>
        <p className={styles.label}>사용 가능한 스킬</p>
        <div className={styles.firstgrid}>
          <input type="text" value='산업리서치' />
          <input type="text" value='Slack' />
          <input type="text" value='데이터 분석' />
          <input type="text" placeholder='스킬 4(선택)' />
        </div>
        <AddDelBtn firstbtn='스킬 추가' secondbtn='스킬 삭제'/>
      </div>

      <div className={styles.category}>
        <p className={styles.label}>사용 가능한 스킬</p>
        <div className={styles.grid}>
          <div className={styles.dropdown}>
            <DropList type={4} placeholder='TOEIC'/>
          </div>
          <input type="text" value='990점' />
          <input type="text" value='ETS' />
          <input type="text" value='2022.04.10' />
        </div>
        <AddDelBtn firstbtn='어학성적 추가' secondbtn='어학성적 삭제'/>
      </div>

      <div className={styles.category}>
        <p className={styles.label}>사용 가능한 스킬</p>
        <div className={styles.grid}>
          <div className={styles.dropdown}>
          <DropList type={5} placeholder='GTQ'/>
          </div>
          <input type="text" value='1급' />
          <input type="text" value='한국생산성본부' />
          <input type="text" value='2022.03.27' />
        </div>
        <AddDelBtn firstbtn='자격증 / 수상경력 추가' secondbtn='자격증 / 수상경력 삭제'/>
      </div>

    </div>
  </div>
  </>
  );
}

export default Grade;