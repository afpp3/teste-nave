import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo-header.svg';
import { useAuth } from '../../hooks/AuthContext';

import styles from './Header.module.css';

const Reader = () => {
  const { signOut } = useAuth();
  return (
    <header className={`${styles.header} container`}>
      <Logo aria-label="Logo Nave" />
      <Link to="/" onClick={() => signOut()}>
        Sair
      </Link>
    </header>
  );
};

export default Reader;
