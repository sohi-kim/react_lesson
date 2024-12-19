import React from 'react';
import './TodoTemplate.scss'
import './TodoInsert.scss'
import TodoInsert from './TodoInsert';

// 컴포넌트의 프롭으로 children 은 자식 컴포넌트를 저장합니다.
// 따로 부모컴포넌트가 정의하지 않아도 기본적으로 사용할 수 있습니다.
function TodoTemplate({children}) {
  return (
    <div className='TodoTemplate'>
      <div className='app-title'>일정관리</div>
      <div className='content'>
            {children}
      </div>
    </div>
  );
}

export default TodoTemplate;