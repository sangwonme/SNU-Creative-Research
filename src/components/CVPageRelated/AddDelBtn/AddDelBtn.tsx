import * as React from 'react';
import styles from './AddDelBtn.module.scss';

function AddDelBtn() {

  return (
    <>
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.add}>활동 추가</div>
        <div className={styles.del}>활동 삭제</div>
      </div>
    </div>
    </>
  );
}

export default AddDelBtn;