import React from "react";

const TodoInput = () => {
  return (
    <form className="todo-input">
      <input className="input" type="text" placeholder="할 일을 입력하세요"/>
      <button className="btn-add" type="submit">Add</button>
      <button className="btn-reset" type="submit">Reset</button>
    </form>
  );
}

export default TodoInput;