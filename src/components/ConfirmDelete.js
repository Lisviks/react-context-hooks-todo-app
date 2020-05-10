import React, { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import { TodoContext } from '../contexts/TodoContext';

const ConfirmDelete = () => {
  const { todoId, closeModal } = useContext(ModalContext);
  const { deleteTodo } = useContext(TodoContext);

  const handleClick = (e) => {
    if (e.target.textContent === 'YES') {
      deleteTodo(todoId);
      closeModal();
    } else if (
      e.target.classList.contains('modal') ||
      e.target.textContent === 'NO'
    ) {
      closeModal();
    }
  };

  return (
    <div className='modal' onClick={handleClick}>
      <div className='modal-content'>
        <p>Are you sure you want to delete this todo?</p>
        <div className='buttons'>
          <button className='btn' onClick={handleClick}>
            YES
          </button>
          <button className='btn' onClick={handleClick}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
