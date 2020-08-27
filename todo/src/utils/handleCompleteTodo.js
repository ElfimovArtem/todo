import { competeTodo } from '../redux/action-creators';

export const handleCompleteTodo = (dispatch, tasksArr, id) => {
  dispatch(competeTodo(id));
  if(tasksArr[id].id === id && tasksArr[id].completed === false) {
    console.log('выполнил');
  } else {
    console.log('надо делать!')
  }
};
