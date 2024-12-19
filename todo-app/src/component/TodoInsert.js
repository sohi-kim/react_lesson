import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

function TodoInsert(props) {
  const [value, setValue] = useState('')
  return (
    // form 은 동기적 통신 방식.
    <form className='TodoInsert'>
      <input placeholder='할 일을 입력하세요.'
             value={value}
             onChange={(e)=>setValue(e.target.value)}
      />
      <button>
            <MdAdd/>
      </button>
    </form>
  );
}

export default TodoInsert;
