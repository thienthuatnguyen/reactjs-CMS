const doctorName = (state: any = '' , action: any) => {
  switch (action.type) {
    case 'SET_DOCTOR_NAME':
      return action.data;

    default:
      return state

  }
}

export default doctorName
