import React from 'react';
import './task-item-styles.scss';

export const TaskItem = ({ title }) => (
  <div className="task-list__item">
    <p className="task-list__item-text">{title}</p>
    <button
      className="task-list__item-button"
      type="button"
    >
      <i className="fa fa-times task-list__item-icon"/>
    </button>
  </div>
);
