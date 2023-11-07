const departmentId = (state: any = '' , action: any) => {
  switch (action.type) {
    case 'SET_DEPARTMENT_ID':
      return action.data;

    default:
      return state

  }
}

export default departmentId
