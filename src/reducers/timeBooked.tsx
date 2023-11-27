const timeBooked = (state: any = '' , action: any) => {
  switch (action.type) {
    case 'SET_TIME_BOOKED':
      return action.data;

    default:
      return state

  }
}

export default timeBooked
