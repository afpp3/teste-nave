import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../../services/api';
import Button from '../Button';
import DialogModal from '../DialogModal';

import styles from './ConfirmationDialog.module.css';

const ConfirmationDialog = ({ naver }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCancel = () => {
    setOpen(false);
    navigate('/');
  };

  const handleConfirm = useCallback(async () => {
    await api.delete(`navers/${naver.id}`);
    setOpenDialog(true);
    setTimeout(() => {
      navigate('/');
    }, 1000);
  });

  if (!open) return null;
  if (openDialog) return <DialogModal type="delete" />;

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div>
          <strong className={styles.title}>Excluir Naver</strong>
        </div>
        <p>Tem certeza que deseja excluir esse Naver?</p>
        <div className={styles.buttons}>
          <Button className={styles.cancelBtn} onClick={handleCancel}>
            Cancelar
          </Button>
          <Button onClick={handleConfirm}>Excluir</Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
