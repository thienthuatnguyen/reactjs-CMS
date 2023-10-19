const hospitalId = (state: any = '' , action: any) => {
  switch (action.type) {
    case 'SET_HOSPITAL_ID':
      return action.data;

    default:
      return state

  }
}

export default hospitalId
