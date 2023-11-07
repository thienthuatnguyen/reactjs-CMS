const doctorId = (state: any = '' , action: any) => {
  switch (action.type) {
    case 'SET_DOCTOR_ID':
      return action.data;

    default:
      return state

  }
}

export default doctorId
