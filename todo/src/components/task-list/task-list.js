import React from 'react';
import { TaskItem } from '../task-item';
import { useDispatch, useSelector } from 'react-redux';
import { handleCompleteTodo } from '../../utils/handleCompleteTodo';
import './task-list-styles.scss';

export const TaskList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      {
        (Array.isArray(todos) && todos.length > 0) ?
          todos.map(todo => (
            <TaskItem
              key={todo.id}
              title={todo.text}
              completed={todo.completed}
              onClick={() => handleCompleteTodo(dispatch, todos, todo.id)}
            />
            )
          )
          :
          <span>Пока нет задач...</span>
      }
    </div>
  );
};
