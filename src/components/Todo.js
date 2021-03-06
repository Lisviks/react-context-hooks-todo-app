import React, { useContext } from 'react';
import trashIcon from '../svg/trash-red.svg';
import { TodoContext } from '../contexts/TodoContext';
import { ModalContext } from '../contexts/ModalContext';

const Todo = ({ todo }) => {
  const { completeTodo } = useContext(TodoContext);
  const { openModal } = useContext(ModalContext);

  const handleChange = () => {
    completeTodo(todo._id);
  };

  return (
    <li className='list-item'>
      <div className='checkbox-field'>
        <input
          type='checkbox'
          id={todo._id}
          className='checkbox'
          checked={todo.complete}
          onChange={handleChange}
        />
        <label htmlFor={todo._id}>{todo.text}</label>
      </div>
      <button className='btn' onClick={() => openModal(todo._id)}>
        <img src={trashIcon} alt='delete' />
      </button>
    </li>
  );
};

export default Todo;
