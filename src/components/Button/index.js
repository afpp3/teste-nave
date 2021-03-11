import React from 'react';

import styles from './Button.module.css';

const Button = ({ children, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
