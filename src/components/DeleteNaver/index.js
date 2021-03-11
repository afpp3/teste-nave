import React, { useState } from 'react';

import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';
import ConfirmationDialog from '../ConfirmationDialog';

const DeleteNaver = ({ naver }) => {
  const [confirmationModal, setConfirmationModal] = useState(false);

  const handleDeleteNaver = () => {
    setConfirmationModal(true);
  };

  if (confirmationModal)
    return (
      <>
        <ConfirmationDialog naver={naver} />
        <a onClick={handleDeleteNaver}>
          <DeleteIcon />
        </a>
      </>
    );

  return (
    <a onClick={handleDeleteNaver}>
      <DeleteIcon />
    </a>
  );
};

export default DeleteNaver;
