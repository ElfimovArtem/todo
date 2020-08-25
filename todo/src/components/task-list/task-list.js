import React from 'react';
import { TaskItem } from '../task-item';
import './task-list-styles.scss';

export const TaskList = ({ todos }) => (
  <div className="task-list">
    {
      (Array.isArray(todos)) ?
        todos.map(todo => <TaskItem key={todo.id} title={todo.text} />)
        :
        <span>Пока нет задач...</span>
    }
  </div>
);
