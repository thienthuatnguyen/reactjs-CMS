import React from 'react'
import { connect } from 'react-redux'
import { addNewTodo, addTodo } from '../actions/actions';
import TodoList from '../components/TodoList';

const AddMore = (props: any, state: any) => {
  let input: any;
  return (
    <div>
      <div>Add more</div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
       props.addNewTodo(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
      <TodoList data ={props.newtodos}/>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  todos: state.todos,
  newtodos: state.newtodos
})

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (id: string) => dispatch(addTodo(id)),
  addNewTodo: (text: string) => dispatch(addNewTodo(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMore)