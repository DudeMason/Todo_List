import React, {Component} from 'react';

class TodoForm extends Component {
state = {todoValue: '', complete: false}

handleChange = (e) => {
  // this.setState({[e.target.name]: e.target.value})
  const { name, value } = e.target
  this.setState({ [name]: value })
}

handleSubmit = (e) => {
  e.preventDefault() //stops page reloading
//   console.log(this.state.todoValue) // <-- DIDN'T WORK?
  this.props.addTodo(this.state)
  this.setState({ todoValue: '' })
}

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.todoValue}
          name='todoValue'
          onChange={this.handleChange}

          required
          placeholder='Add a todo'
        />
      </form>
    )
  }
}

export default TodoForm
