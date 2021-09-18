import React, { useState } from "react";
import DoneList from "./done-list";
import TodoInput from "./todo-input";
import TodoList from "./todo-list";

const TodoMain = () => {
  const [data, setData] = useState([
    { id: 1, text: 'first todo list', done: true },
    { id: 2, text: 'todo list', done: false },
    { id: 3, text: 'list', done: false },
  ]);

  const [updateDate, setUpdateDate] = useState(210918);

  return (
    <div className="todo-app">
      <header className="todo-app__header">
        <h1 className="title">Todo Check List</h1>
          {
            updateDate &&
            ( 
            <div className="update-date">update date:
              <span className="date">{updateDate}</span>
            </div> 
            )
          }
      </header>

      <section className="todo-app__list">
        <div className="todo-app__list-added">
          <h2>To Do Lists</h2>
          <ul>
            {
              data.map(item => (
                <TodoList
                 key={item.id}
                 item={item} />
              ))
            }
          </ul>
        </div>
        
        <div className="todo-app__list-done">
          <h2>Done Lists</h2>
          <ul>
            <DoneList />
          </ul>
        </div>
      </section>

      <div className="todo-app__writer">
        <TodoInput />
      </div>
    </div>
  );
}

export default TodoMain;