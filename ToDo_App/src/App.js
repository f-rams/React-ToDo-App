import React from 'react';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div>
        <h1 className="text-center">Todo List</h1>
      </div>
      <div>
        <TodoList />
      </div>
    </>
  );
}

export default App;
