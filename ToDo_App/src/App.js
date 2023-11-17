import React from 'react';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="mt-5">
        <h1 className="" id="title">
          2-DO-LIST
        </h1>
      </div>
      <div>
        <TodoList />
      </div>
    </>
  );
}

export default App;
