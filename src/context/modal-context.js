import React, {createContext} from 'react';
import useModal from "../hooks/modal";

const ModalContext = createContext();

const withModal = ({Component, confirm, cancel}) => {
  const modalActions = useModal({confirm, cancel});
  return (props) => (
    <ModalContext.Provider value={modalActions}>
      <Component {...props} />
    </ModalContext.Provider>
  )
};

export default withModal;