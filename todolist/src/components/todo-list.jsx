import React from "react";

const TodoList = ({ item, onRemove, onCompleted }) => {
  const { id, text, completed } = item;

  return (
    <li>
      <label className={`label-done ${completed ? 'todo-done' :''}`}>
        <input checked={completed} 
               onChange={() => onCompleted(id)}
               className="btn-done" type="checkbox"/>
        { text }
      </label>

      <div className="todo-delete">
        <button onClick={() => onRemove(id)} className="btn-delete">
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoList;