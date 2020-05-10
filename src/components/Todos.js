import React, { useContext } from 'react';
import Todo from './Todo';
import NewTodo from './NewTodo';
import { TodoContext } from '../contexts/TodoContext';
import { ModalContext } from '../contexts/ModalContext';
import ConfirmDelete from './ConfirmDelete';

const Todos = () => {
  const { todos } = useContext(TodoContext);
  const { modal } = useContext(ModalContext);

  const todoList = todos.length
    ? todos.map((todo) => <Todo key={todo._id} todo={todo} />)
    : '';

  return (
    <div>
      {modal && <ConfirmDelete />}
      <ul className='list'>
        {todoList}
        <NewTodo />
      </ul>
    </div>
  );
};

export default Todos;
