import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import styles from './Login.module.css';

import { useAuth } from '../../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, errors } = useForm();
  const { signIn, id } = useAuth();

  useEffect(() => {
    if (id) navigate('/navers');
    return;
  }, []);

  const submit = useCallback(
    async (data) => {
      try {
        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        console.log(err);
        return;
      }
    },
    [signIn],
  );

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <Logo className={styles.logo} aria-label="Logo Nave" />

        <form className={styles.form} onSubmit={handleSubmit(submit)}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            ref={register}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            ref={register}
          />

          <button className={styles.btn}>Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
