import { useEffect, useState, useRef } from 'react';
import NewTodoForm from './NewTodoForm';
import { Button } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';

const initialState = () => {
  let i_State = [];
  if (localStorage.getItem('toDo')) {
    i_State = JSON.parse(localStorage.getItem('toDo'));
  }
  return i_State;
};

const TodoList = () => {
  const [todoList, setTodoList] = useState(initialState);

  let keys = todoList.map((obj) => obj.activity);

  useEffect(() => {
    localStorage.setItem('toDo', JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (todo) => {
    if (keys.includes(todo.activity)) {
      alert("This 'todo' is already in the list");
      return;
    }
    setTodoList((previousList) => [...previousList, todo]);
  };

  const remove = (removedTodo) => {
    setTodoList(todoList.filter((todo) => todo !== removedTodo));
  };

  const changeStatus = (e) => {
    let target = e.target;
    let parent = e.target.parentElement.parentElement.children[0];
    parent.style.textDecoration === ''
      ? (parent.style.textDecoration = 'line-through')
      : (parent.style.textDecoration = '');
    target.innerText === 'Mark as completed'
      ? (target.innerText = 'Unmark as completed')
      : (target.innerText = 'Mark as completed');

    console.log(parent.style.textDecoration);

    const updatedTodo = todoList.map((value, index) => {
      if (value.activity === parent.children[0].innerText) {
        value.style = parent.style.textDecoration;
      }
      return value;
    });
    setTodoList(updatedTodo);
  };

  return (
    <>
      <div className="d-flex justify-content-center text-center">
        <div className="w-75">
          <NewTodoForm addTodo={addTodo} />
          <div className="d-flex justify-content-center text-center w-100">
            <Stack gap={3}>
              {todoList.map((todo) => (
                <div className="d-flex justify-content-between p-2 reminderTag">
                  <div
                    className="pt-2 ps-2 "
                    style={{ textDecoration: todo.style, fontWeight: 'bold' }}
                  >
                    <p className="todoTitle">{todo.activity}</p>
                    <p className="fw-light" style={{ fontSize: 'smaller' }}>
                      Added at: {todo.added_at}
                    </p>
                  </div>
                  <div className="mt-3 buttons-container">
                    <Button
                      onClick={changeStatus}
                      variant="success"
                      className="ms-10"
                    >
                      {todo.style === ''
                        ? 'Mark as completed'
                        : 'Unmark as completed'}
                    </Button>
                    <Button
                      onClick={() => remove(todo)}
                      variant="danger"
                      className="ms-2"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
