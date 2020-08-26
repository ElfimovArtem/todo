import React, { useState } from 'react';
import { addTodo } from '../../redux/action-creators';
import './form-styles.scss';
import { connect } from 'react-redux';
import { store } from '../../redux';

const Form = ({ dispatch }) => {
  const inputBtnHandler = () => {
    if (title.trim()) {
      dispatch(addTodo(title));
      console.log(store.getState());
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

export default connect()(Form);
