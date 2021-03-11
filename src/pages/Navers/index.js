import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';
import ShowNaverModal from '../../components/ShowNaverModal';
import DeleteNaver from '../../components/DeleteNaver';

import styles from './Navers.module.css';
import EditNaverIcon from '../../components/EditNaverIcon';

const Navers = () => {
  const [navers, setNavers] = useState([]);
  const [modalNaver, setModalNaver] = useState(null);

  const showNaver = (naver) => {
    setModalNaver(naver);
  };

  useEffect(() => {
    api.get('navers').then((response) => {
      setNavers(response.data);
    });
  }, []);

  if (!navers) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Header />
      {modalNaver && (
        <ShowNaverModal naver={modalNaver} setModalNaver={setModalNaver} />
      )}

      <section className="container">
        <div className={styles.header}>
          <h1>Navers</h1>
          <Link to="create">Adicionar Naver</Link>
        </div>
        <div className={styles.cardContainer}>
          {navers.map((naver) => (
            <div className={styles.card} key={naver.id}>
              <a onClick={() => showNaver(naver)}>
                <img src={naver.url} alt="" />
              </a>
              <strong>{naver.name}</strong>
              <p>{naver.job_role}</p>
              <div>
                <DeleteNaver naver={naver} />
                <EditNaverIcon naver={naver} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Navers;
