const profileId = (state: any = '' , action: any) => {
  switch (action.type) {
    case 'SET_PROFILE_ID':
      return action.data;

    default:
      return state

  }
}

export default profileId
