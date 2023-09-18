const user = (state: any = {} , action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return action.data;

    default:
      return state

  }
}

export default user
