import React, { useContext } from 'react';
import Todo from './Todo';
import NewTodo from './NewTodo';
import { TodoContext } from '../contexts/TodoContext';

const Todos = () => {
  const { todos } = useContext(TodoContext);

  const todoList = todos.length
    ? todos.map((todo) => <Todo key={todo._id} todo={todo} />)
    : '';
  return (
    <div>
      <ul className='list'>
        {todoList}
        <NewTodo />
      </ul>
    </div>
  );
};

export default Todos;
