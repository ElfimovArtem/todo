import React from 'react';
import { TaskItem } from '../task-item';
import './task-list-styles.scss';

export const TaskList = () => (
  <div className="task-list">
    <TaskItem title={'First Task'} />
    <TaskItem title={'Second Task'} />
    <TaskItem title={'Third Task'} />
    <TaskItem title={'Fourth Task'} />
  </div>
);
