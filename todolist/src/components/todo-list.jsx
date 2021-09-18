import React from "react";

const TodoList = (props) => {
  return (
    <li>
      <label className="label-done">
        <input className="btn-done" type="checkbox"/>
        {props.item.text}
      </label>

      <button className="btn-delete">
        <i className="far fa-trash-alt"></i>
      </button>
    </li>
  );
}

export default TodoList;