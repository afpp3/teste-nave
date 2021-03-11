import React from 'react';

import styles from './Input.module.css';

const Input = ({ register, name, label, placeholder, ...props }) => {
  return (
    <>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        ref={register}
        className={styles.input}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
};

export default Input;
