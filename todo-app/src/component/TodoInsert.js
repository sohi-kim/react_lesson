import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

function TodoInsert({onInsert}) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) =>{
        e.preventDefault()    // form 제출 기본 동작을 못하게 막음.
        // 입력값을 할일 목록(배열)에 추가시키는 함수 실행하기
        onInsert(value)
        //   ㄴ 부모 컴포넌트에서 프롭으로 받음.
        setValue('')
  }
  return (
    // form 은 동기적 통신 방식. 
    // => input 에서 엔터를 누르면 특정 함수 실행하도록 onSubmit 처리함수 작성
    <form className='TodoInsert' onSubmit={handleSubmit}>
      <input placeholder='할 일을 입력하세요.'
             value={value}
             onChange={(e)=>setValue(e.target.value)}
      />
      {/* 버튼 클릭은 onSubmit => handleSubmit 함수 실행 */}
      <button type='submit'>
            <MdAdd/>
      </button>
    </form>
  );
}

export default TodoInsert;
