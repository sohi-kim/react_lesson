import React from 'react';
import './TodoList.scss'
import TodoListItem from './TodoListItem';

function TodoList({todos,onRemove,onChecked,onTest}) {
  return (
    <div className='TodoList'>
      {/* ListItem을 반복해서 표시 */}
      {/* 항목 삭제 아이콘 TodoListItem 컴포넌트에 있음. */}
      {todos.map( (item) =>
        <TodoListItem todo={item} onChecked={onChecked}
              onRemove={onRemove} key={item.id} onTest={onTest}/>
      )}
    </div>
  );
}

export default TodoList;
