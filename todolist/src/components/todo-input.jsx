import React, { useRef } from "react";

const TodoInput = ({ onAdd, onReset }) => {
  const inputRef = useRef();
  let inputValue = '';

  const handleChange = event => {
    inputValue = event.target.value;
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const handleClick = () => {
    if (inputValue === '') {
      inputRef.current.focus();
      return;
    }
    inputRef.current.value = '';
    onAdd(inputValue);
    inputRef.current.focus();
  };

  return (
    <div className="todo-input">
      <input ref={inputRef}
             onChange={handleChange}
             onKeyPress={handleKeyPress}
             className="input" 
             type="text" 
             placeholder="TODO 할 일을 입력하세요" />
      <button onClick={handleClick} className="btn-add">Add</button>
      <button onClick={() => onReset()} className="btn-reset">Reset</button>
    </div>
  );
}

export default TodoInput;