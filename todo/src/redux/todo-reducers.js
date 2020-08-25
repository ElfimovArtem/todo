import { ADD_TODO, COMPLETE_TODO } from '../constants';

const initialState = {
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            id: state.todos.length,
            completed: false
          }
        ]
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
      };
    default:
      return state;
  }
};
