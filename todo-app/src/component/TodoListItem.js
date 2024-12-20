import React from 'react';
import './TodoListItem.scss'
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import cn from 'classnames'

// 할일 항목 1개(부모 컴포넌트로 부터 받는 프롭)를 출력하는 컴포넌트
function TodoListItem({todo}) {
  // todo 객체를 분해(비구조화) 선언
  const {id, text, checked} = todo
  return (
    <div className='TodoListItem'>
      {/*  yarn add classnames 설치해야 스타일 선택적 적용 가능 */}
       <div className={cn('checkbox',{checked})}>
         {checked? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
         <div className='text'>{text}</div>
       </div>
       <div className='remove'>
           <MdRemoveCircleOutline/>
       </div> 
    </div>
  );
}

export default TodoListItem;