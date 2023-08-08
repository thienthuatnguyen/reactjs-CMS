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
  
