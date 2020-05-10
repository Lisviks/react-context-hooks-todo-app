import React from 'react';
import './App.scss';
import Todos from './components/Todos';
import TodoContextProvider from './contexts/TodoContext';

function App() {
  return (
    <div className='container'>
      <h1 className='title'>Todo App</h1>
      <TodoContextProvider>
        <Todos />
      </TodoContextProvider>
    </div>
  );
}

export default App;
