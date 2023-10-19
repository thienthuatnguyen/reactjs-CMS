import { combineReducers } from 'redux'
import todos from './todos'
import newtodos from './newtodos'
import visibilityFilter from './visibilityFilter'
import user from './user'
import profileId from './profileId'
import hospitalId from './hospitalId'

export default combineReducers({
  todos,
  newtodos,
  visibilityFilter,
  user,
  profileId,
  hospitalId
})
