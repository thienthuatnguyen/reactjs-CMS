let nextTodoId = 0
export const addTodo = (content: any) => ({
  type: 'ADD_TODO',
  payload: {
    id: ++nextTodoId,
    content,
  },
})

export const addNewTodo = (text: string) => ({
    type: 'ADD_NEW_TODO',
    text
  })
  
  export const setVisibilityFilter = (filter: string) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })
  
  export const toggleTodo = (id: string) => ({
    type: 'TOGGLE_TODO',
    id
  })
  
  export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }

  export const setUser = (data: any) => ({
    type: 'SET_USER',
    data
  })

  export const setProfileId = (data: any) => ({
    type: 'SET_PROFILE_ID',
    data
  })
  
  export const setHospitalId = (data: any) => ({
    type: 'SET_HOSPITAL_ID',
    data
  })
  
