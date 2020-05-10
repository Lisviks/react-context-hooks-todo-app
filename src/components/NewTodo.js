import React, { useContext } from 'react';
import plusIcon from '../svg/plus.svg';
import { TodoContext } from '../contexts/TodoContext';

const NewTodo = () => {
  const { newTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    newTodo(e.target.text.value);
    e.target.text.value = '';
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='text'
        className='text-input'
        placeholder='New todo...'
      />
      <button className='btn'>
        <img src={plusIcon} alt='add' />
      </button>
    </form>
  );
};

export default NewTodo;
