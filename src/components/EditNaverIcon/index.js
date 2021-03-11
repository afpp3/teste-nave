import React from 'react';
import { useNavigate } from 'react-router';

import { ReactComponent as EditIcon } from '../../assets/edit-icon.svg';

const EditNaverIcon = ({ naver }) => {
  const navigate = useNavigate();
  const handleEditNaver = async (naver) => {
    navigate(`/navers/edit/${naver.id}`);
  };

  return (
    <a onClick={() => handleEditNaver(naver)}>
      <EditIcon />
    </a>
  );
};

export default EditNaverIcon;
