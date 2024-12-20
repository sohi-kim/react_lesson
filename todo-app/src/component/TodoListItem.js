import React from 'react';
import './TodoListItem.scss'
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import cn from 'classnames'

// 할일 항목 1개(부모 컴포넌트로 부터 받는 프롭)를 출력하는 컴포넌트
function TodoListItem({todo,onRemove,onChecked}) {
  // todo 객체를 분해(비구조화) 선언
  const {id, text, checked} = todo

  const handleButton = ()=>{
      //리엑트 객체이름 window 생략 못함
      const yn = window.confirm(`일정 ${id}:${text}를 삭제하십니까?`)
      if(yn)
        onRemove(id)
  }

  return (
    <div className='TodoListItem'>
      {/*  yarn add classnames 설치해야 스타일 선택적 적용 가능 */}
       <div className={cn('checkbox',{checked})} onClick={()=>onChecked(id)}>
         {checked? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
         <div className='text'>{text}</div>
       </div>
       <div className='remove' onClick={handleButton}>
        {/*  ()=> onRemove(id)  대신에 handleButton 함수 호출합니다.*/}
           <MdRemoveCircleOutline/>
       </div> 
    </div>
  );
}

export default TodoListItem;