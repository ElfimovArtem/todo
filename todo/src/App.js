import React from 'react';
import './styles.scss';
import { Form } from './components/form';
import { TaskList } from './components/task-list';
import { store } from './redux';
import { addTodo } from './redux/action-creators';

export const App = () => {
  console.log(store.getState());
  store.dispatch(addTodo('123123123'));
  store.dispatch(addTodo('asdasd'));
  store.dispatch(addTodo('qweqweqwe'));
  console.log(store.getState());

  return (
    <div className="wrapper">
      <h1 className="title">ToDo List</h1>
      <Form />
      <TaskList />
    </div>
  );
};
