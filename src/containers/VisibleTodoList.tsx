import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { VisibilityFilters, toggleTodo } from '../actions/actions'

const getVisibleTodos = (todos: any, filter:any) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t: any) => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t: any) => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state: any) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: any) => ({
  toggleTodo: (id: any) => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
