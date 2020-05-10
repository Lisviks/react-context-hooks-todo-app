const modalReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, modal: true, todoId: action.payload };
    case 'CLOSE_MODAL':
      return { ...state, modal: false, todoId: null };
    default:
      return state;
  }
};

export default modalReducer;
