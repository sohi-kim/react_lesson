import React from 'react';
import './TodoTemplate.scss'
import './TodoInsert.scss'
import TodoInsert from './TodoInsert';

function TodoTemplate() {
  return (
    <div className='TodoTemplate'>
      <div className='app-title'>일정관리</div>
      <div className='content'>
            <TodoInsert/>
      </div>
    </div>
  );
}

export default TodoTemplate;