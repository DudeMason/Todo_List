import React, { Component } from 'react';
import List from './todos/List';
import TodoForm from './todos/TodoForm';

class App extends Component {
  state = { todos: [
      { id: 1, todoValue: 'Learn rails', complete: false },
      { id: 2, todoValue: 'Learn React', complete: false },
      { id: 3, todoValue: 'Learn React Router', complete: false }
    ]
  }

  handleComplete = (id) => {
    const {todos} = this.state
    this.setState({
      todos: todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })
    })
  }

  getUniqId = () => {
   //NOTE We are just using this as a helper function for id's since we aren't using a db yet
   return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
  }

  addTodo = (incomingTodo) => {
    const { todos } = this.state
    const newTodo = { id: this.getUniqId(), ...incomingTodo }
    this.setState({ todos: [newTodo, ...todos] })
  }

  render(){
    return(
      <div>
        <TodoForm addTodo={this.addTodo} />
        <List items={this.state.todos} handleComplete={this.handleComplete}/>
      </div>
    )
  }
}
export default App;
