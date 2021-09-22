import React, { useState } from "react";
import TodoInput from "./todo-input";
import TodoList from "./todo-list";

const TodoMain = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Javascript', completed: false },
    { id: 2, text: 'React', completed: false },
    { id: 3, text: 'Typescript', completed: false },
  ]);

  // 날짜 출력
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // TODO 남은 할 일 체크
  const undoneTodos = todos.filter(todo => !todo.completed);

  //todos id 중 가장 큰 id값
  const maxId = todos.length ? Math.max(...todos.map(todo => todo.id)) : 0;

  // TODO 추가기능
  const onAdd = (newText) => {
    setTodos((prevTodo) => {
      return [...prevTodo, { id: maxId + 1, text: newText, completed: false }]
    });
  };

  // TODO 리셋기능
  const onReset = () => {
    if(!todos.length) {
      alert("To do list is already empty!");
      return;
    }
    setTodos([]);
  };

  // TODO 삭제기능
  const onRemove = (id) => {
    const updated = todos.filter(item => item.id !== id);
    setTodos(updated);
  };

  // TODO 완료처리기능
  const onCompleted = (id) => {
    const newTodo = [...todos];
    newTodo[id-1].completed = !newTodo[id-1].completed;
    setTodos(newTodo);
  };

  return (
    <div className="todo-app">
      <header className="todo-app__header">
        <h1 className="title">Todo Check List</h1>
        <div className="day">{dateString}</div>
        <div className="left-count">할 일 {undoneTodos.length}개 남음</div>
      </header>

      <section className="todo-app__list">
        <div className="todo-app__list-added">
          <ul>
            {
              todos.map(item => (
                <TodoList
                 key={item.id}
                 item={item}
                 onRemove={onRemove}
                 onCompleted={onCompleted}/>
              ))
            }
          </ul>
        </div>
      </section>

      <div className="todo-app__writer">
        <TodoInput 
         onAdd={onAdd} 
         onReset={onReset} />
      </div>
    </div>
  );
}

export default TodoMain;