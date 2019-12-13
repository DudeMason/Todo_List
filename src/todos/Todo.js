import React from 'react';


const styles ={
  complete: {
    color: 'grey',
    textDecoration: 'line-through'
  }
}
const Todo = ({id, todoValue, complete, handleComplete}) => (
  <li
    style={ complete ? {...styles.complete} : {}}
    onClick={() => handleComplete(id)}
  >
    { todoValue }
  </li>
)

export default Todo;
