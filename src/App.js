import React from 'react';
import './App.scss';
import Todos from './components/Todos';
import TodoContextProvider from './contexts/TodoContext';
import ModalContextProvider from './contexts/ModalContext';

function App() {
  return (
    <div className='container'>
      <h1 className='title'>Todo App</h1>
      <TodoContextProvider>
        <ModalContextProvider>
          <Todos />
        </ModalContextProvider>
      </TodoContextProvider>
    </div>
  );
}

export default App;
