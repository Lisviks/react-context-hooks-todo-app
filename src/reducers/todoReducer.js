const todoReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return [...action.payload];
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'COMPLETE_TODO':
      return [
        ...state.map((todo) => {
          if (todo._id === action.payload) {
            todo.complete = true;
          }
          return todo;
        }),
      ];
    case 'DELETE_TODO':
      return [...state.filter((todo) => todo._id !== action.payload)];
    default:
      return state;
  }
};

export default todoReducer;
