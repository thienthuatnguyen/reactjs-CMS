import { combineReducers } from 'redux'
import todos from './todos'
import newtodos from './newtodos'
import visibilityFilter from './visibilityFilter'
import user from './user'

export default combineReducers({
  todos,
  newtodos,
  visibilityFilter,
  user
})
