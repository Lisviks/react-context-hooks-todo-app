import React, { createContext, useReducer } from 'react';
import modalReducer from '../reducers/modalReducer';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const intialState = { modal: false };

  const [modal, dispatch] = useReducer(modalReducer, intialState);

  const openModal = (id) => dispatch({ type: 'OPEN_MODAL', payload: id });
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

  return (
    <ModalContext.Provider value={{ ...modal, openModal, closeModal }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
