const newtodos = (state = [], action: any) => {
  switch (action.type) {
    case 'ADD_NEW_TODO':
      return [
        ...state,
        {
          text: action.text,
          id: 1
        }
      ]
    default:
      return state
  }
}

export default newtodos
