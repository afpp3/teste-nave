import React from 'react';

import DeleteNaver from '../DeleteNaver';

import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';

import styles from './ShowNaverModal.module.css';
import EditNaverIcon from '../EditNaverIcon';

const ShowNaverModal = ({ naver, setModalNaver }) => {
  const getAge = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const naverAge = getAge(naver.birthdate);
  const companyYears = getAge(naver.admission_date);

  const closeModal = () => setModalNaver(null);

  return (
    <div className={styles.modal}>
      <div className={styles.photo}>
        <div className={styles.img}>
          <img src={naver.url} alt="Imagem do naver" />
        </div>

        <div className={styles.details}>
          <a className={styles.closeModal} onClick={closeModal}>
            <CloseIcon />
          </a>

          <h1>{naver.name}</h1>
          <p>{naver.job_role}</p>

          <strong>Idade</strong>
          <p>{naverAge} anos</p>

          <strong>Tempo de empresa</strong>
          {companyYears <= 1 ? (
            <p>{companyYears} ano</p>
          ) : (
            <p>{`${companyYears} `} anos</p>
          )}

          <strong>Projetos que participou</strong>
          <p>{naver.project}</p>

          <div className={styles.icons}>
            <DeleteNaver naver={naver} />
            <EditNaverIcon naver={naver} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowNaverModal;
