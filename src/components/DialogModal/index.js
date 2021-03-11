import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';

import styles from './DialogModal.module.css';

const DialogModal = ({ type }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const dialogTypeVariations = {
    success: {
      title: 'Naver criado',
      description: 'Naver criado com succeso!',
    },

    error: {
      title: 'Falha ao criar naver',
      description:
        'Verifique se todos os campos foram preenchidos corretamente.',
    },

    edit: {
      title: 'Naver atualizado',
      description: 'Naver atualizado com sucesso!',
    },

    editError: {
      title: 'Falha ao editar naver',
      description:
        'Verifique se todos os campos foram preenchidos corretamente.',
    },

    delete: {
      title: 'Naver excluído',
      description: 'Naver excluído com sucesso!',
    },
  };

  const closeModal = () => {
    setOpen(false);
    navigate('/navers');
  };

  if (!open) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div>
          <strong className={styles.title}>
            {dialogTypeVariations[type].title}
          </strong>
          <CloseIcon onClick={closeModal} />
        </div>
        <p>{dialogTypeVariations[type].description}</p>
      </div>
    </div>
  );
};

export default DialogModal;
