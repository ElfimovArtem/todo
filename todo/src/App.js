import React from 'react';
import './styles.scss';
import { Form } from './components/form';
import {TaskList} from "./components/task-list";

export const App = () => {
  return (
    <div className="wrapper">
      <h1 className="title">ToDo List</h1>
      <Form />
      <TaskList />
    </div>
  );
};
