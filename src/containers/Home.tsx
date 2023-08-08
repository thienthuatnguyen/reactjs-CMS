import React from 'react'
import { connect } from 'react-redux'
import { addNewTodo } from '../actions/actions';
import TodoList from '../components/TodoList';
import { Button } from '@material-ui/core';

const Home = (props: any ) => {
  let input: any;
  return (
    <div className='wrapper-home-page'>
      <div>Home page</div>
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
        <Button color="primary" variant="contained">
        Click Me
      </Button>
      </form>
      <a href = '/todos'>link</a>
      <TodoList data ={props.newtodos}/>
    </div>
  )
}
const getVisibleTodos = (state: any) => {
  return state.newtodos;
 
}
const mapStateToProps = (state: any) => ({
  newtodos: getVisibleTodos(state)
})

const mapDispatchToProps = (dispatch:any) => ({
  addNewTodo: (text: string) => dispatch(addNewTodo(text))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

