import React, { createContext, useReducer, useEffect } from 'react';
import todoReducer from '../reducers/todoReducer';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const api = 'http://localhost:5000/api/v1/todos';
  const initialState = [];

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const getTodos = async () => {
    const res = await fetch(api);
    const data = await res.json();
    dispatch({ type: 'GET_TODOS', payload: data });
  };

  const newTodo = async (text) => {
    const res = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();

    dispatch({ type: 'ADD_TODO', payload: data });
  };

  const completeTodo = async (id) => {
    await fetch(`${api}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ complete: true }),
    });

    dispatch({ type: 'COMPLETE_TODO', payload: id });
  };

  const deleteTodo = (id) => {
    fetch(`${api}/${id}`, { method: 'DELETE' });

    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{ todos, newTodo, completeTodo, deleteTodo, getTodos }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
