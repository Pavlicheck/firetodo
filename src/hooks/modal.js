import React, { useState } from 'react';

const useModal = ({confirm, cancel}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onCancel = () => {
    setIsOpen(false);
    cancel && cancel()
  };

  const onConfirm = () => {
    setIsOpen(false);
    confirm && confirm()
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return ({isOpen, onCancel, onConfirm, openModal})
};

export default useModal