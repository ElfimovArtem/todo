import React from 'react';
import './task-item-styles.scss';

export const TaskItem = ({ title, onClick, completed, onBtnClick }) => (
  <div className="task-list__item">
    <p
      className="task-list__item-text"
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >{title}</p>
    <button
      className="task-list__item-button"
      onClick={onBtnClick}
      type="button"
    >
      <i className="fa fa-times task-list__item-icon"/>
    </button>
  </div>
);
