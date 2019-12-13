import React from 'react';

const List = ({ items }) => (
  <div>
    <h1>List</h1>
    <ul>
      { items.map( item => <li key={item.id}>{item.todoValue}</li> )}
    </ul>
  </div>
)

export default List;
