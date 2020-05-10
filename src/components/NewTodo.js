import React, { useContext } from 'react';
import plusIcon from '../svg/plus.svg';
import { TodoContext } from '../contexts/TodoContext';

const NewTodo = () => {
  const { newTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.text;
    if (!text.value) return;
    newTodo(text.value);
    text.value = '';
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
