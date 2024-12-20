import React from 'react';
import './TodoList.scss'
import TodoListItem from './TodoListItem';

function TodoList({todos}) {
  return (
    <div className='TodoList'>
      {/* ListItem을 반복해서 표시 */}
      {todos.map( (item) =>
        <TodoListItem todo={item}/>
      )}
    </div>
  );
}

export default TodoList;
