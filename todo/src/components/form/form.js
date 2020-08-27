import React, { useState } from 'react';
import { addTodo } from '../../redux/action-creators';
import { useDispatch } from 'react-redux';
import './form-styles.scss';

export const Form = () => {
  const myDispatch = useDispatch();
  const handleAddTodo = (params) => myDispatch(addTodo(params));

  const inputBtnHandler = () => {
    if (title.trim()) {
      handleAddTodo(title);
    }
    setTitle('');
  };

  const [title, setTitle] = useState('');

  return (
    <form className="input-form">
      <input
        className="input-form__input"
        autoComplete="off"
        type="text"
        value={title}
        placeholder="Create task"
        onChange={(event) => setTitle(event.target.value)}
        id="input"
      />
      <button
        className="input-form__btn"
        type="button"
        onClick={() => inputBtnHandler()}
      >Create</button>
    </form>
  );
};
