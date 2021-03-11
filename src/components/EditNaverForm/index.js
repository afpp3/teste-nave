import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Header from '../Header';
import Button from '../Button';
import Input from '../Input';

import { ReactComponent as BackArrow } from '../../assets/arrow-back.svg';
import styles from './NaverForm.module.css';
import api from '../../services/api';
import DialogModal from '../DialogModal';

const EditNaverForm = () => {
  // const schema = yup.object().shape({
  //   name: yup.string().required('Campo obrigatório'),
  //   birthdate: yup.required('Campo obrigatório'),
  //   project: yup.string().required('Campo obrigatório'),
  //   job_role: yup.required('Campo obrigatório'),
  //   admission_date: yup.required(),
  //   url: yup.string().required('Campo obrigatório'),
  // });

  const navigate = useNavigate();
  const { id } = useParams();

  const [openDialog, setOpenDialog] = useState(false);
  const { handleSubmit, register, errors } = useForm();

  const editNaver = useCallback(async (data) => {
    try {
      await api.put(`navers/${id}`, data);
      setOpenDialog(true);
      setTimeout(() => {
        navigate('/navers');
      }, 1000);
    } catch (error) {
      setDialogType('editError');
      setOpenDialog(true);
    }
  });

  return (
    <>
      <Header />
      {openDialog && <DialogModal type="edit" open={openDialog} />}

      <div className={styles.container}>
        <div className={styles.header}>
          <Link to="/navers">
            <BackArrow />
          </Link>
          <h1>Editar naver</h1>
        </div>

        <form onSubmit={handleSubmit(editNaver)} className={styles.form}>
          <div>
            <Input
              label="Nome"
              id="name"
              name="name"
              register={register}
              placeholder="Nome"
            />
            {errors && <p>{errors?.message}</p>}
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

export default EditNaverForm;
