import React from 'react'
import PropTypes from 'prop-types'
import http from '../services/httpConfig'

function TodoList(state: any): JSX.Element {
  http.get('/abc').then(res=> {
  }).catch(err=> {console.log(err.message)})
  return (
    <ul>
      {state.data.map((todo: any, index: number) =>
        <li key = {index}>
          {todo.text}
        </li>
      )}
    </ul>
  )

}

TodoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default TodoList
