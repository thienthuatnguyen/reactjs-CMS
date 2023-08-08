const todos = (state = [], action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return [...state, {id: action.id,
        text: action.text,
        completed: false}];
    default:
      return state
  }
}

export default todos
