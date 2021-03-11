import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../Header';
import Button from '../Button';
import Input from '../Input';

import { ReactComponent as BackArrow } from '../../assets/arrow-back.svg';
import styles from './CreateNaverForm.module.css';
import api from '../../services/api';
import DialogModal from '../DialogModal';

const CreateNaverForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const { handleSubmit, register, errors } = useForm();

  const addNaver = useCallback(async (data) => {
    try {
      await api.post('/navers', data);
      setOpenDialog(true);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      setDialogType('error');
      setOpenDialog(true);
    }
  });

  return (
    <>
      <Header />
      {openDialog && <DialogModal type="success" open={openDialog} />}

      <div className={styles.container}>
        <div className={styles.header}>
          <Link to="/navers">
            <BackArrow />
          </Link>
          <h1>Adicionar naver</h1>
        </div>

        <form onSubmit={handleSubmit(addNaver)} className={styles.form}>
          <div>
            <Input
              label="Nome"
              id="name"
              name="name"
              register={register}
              placeholder="Nome"
            />
            <Input
              label="Idade"
              id="birthdate"
              name="birthdate"
              register={register}
              placeholder="dd/mm/yyyy"
              // type="date"
            />
            <Input
              label="Projetos que participou"
              id="project"
              name="project"
              register={register}
              placeholder="Projetos que participou"
            />
          </div>
          <div>
            <Input
              label="Cargo"
              id="job_role"
              name="job_role"
              register={register}
              placeholder="Cargo"
            />
            <Input
              label="Tempo de empresa"
              id="admission_date"
              name="admission_date"
              register={register}
              placeholder="dd/mm/yyyy"
              // type="date"
            />
            <Input
              label="URL da foto do naver"
              id="url"
              name="url"
              register={register}
              placeholder="URL da foto do naver"
            />
          </div>
          <Button>Salvar</Button>
        </form>
      </div>
    </>
  );
};

export default CreateNaverForm;
