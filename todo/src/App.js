import React from 'react';
import './styles.scss';
import { TaskList } from './components/task-list';
import { Form } from './components/form'

export const App = () => (
  <div className="wrapper">
    <h1 className="title">ToDo List</h1>
    <Form />
    <TaskList/>
  </div>
);
