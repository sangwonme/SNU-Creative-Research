import * as React from 'react';
import useHover from '../../../customHooks/useHover';
import styles from './Button.module.scss';

interface Props{
  text: string,
  color: string,
  onClick: any
}

function Button({text, color, onClick}: Props) {
  // hover
  const [hoverRef, isHovered] = useHover();

  return (
    <>
      <div 
        className={styles.box}
        ref={hoverRef}
        onClick={onClick}
        style={
          isHovered && color=='#5696F4' ?
          {backgroundColor: '#2679F1'} :
          {backgroundColor: color}
        }
      >
        <p className={styles.text}>
          {text}
        </p>
      </div>
    </>
  );
}

export default Button;