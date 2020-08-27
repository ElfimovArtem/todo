import { ADD_TODO, COMPLETE_TODO } from '../constants';

export const addTodo = (text) => {
  return { type: ADD_TODO, text }
};

export const competeTodo = (index) => {
  return { type: COMPLETE_TODO, index }
};

export const deleteTodo = (index) => {
  return { type: COMPLETE_TODO, index }
};
