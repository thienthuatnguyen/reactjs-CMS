import { combineReducers } from 'redux'
import user from './user'
import profileId from './profileId'
import hospitalId from './hospitalId'
import doctorId from './doctorId'
import timeBooked from './timeBooked'
import dateBooked from './dateBooked'
import departmentId from './departmentId'
import doctorName from './doctorName'

export default combineReducers({
  user,
  profileId,
  hospitalId,
  doctorId,
  departmentId,
  dateBooked,
  timeBooked,
  doctorName
})
