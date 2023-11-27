const dateBooked = (state: any = '' , action: any) => {
  switch (action.type) {
    case 'SET_DATE_BOOKED':
      return action.data;

    default:
      return state

  }
}

export default dateBooked
