import React, { useState } from 'react';

function InputState() {
  
  // useState 훅으로 정의한 변수는 상태 변수
  const [username,setUsername] = useState('')
  const [nickname,setNickname] = useState('')
  
  // 상태 변수 username 또는 nickname 값이 변경되면 리렌더링.콘솔 출력
  console.log('re-렌더링',username, nickname)

  // OK 버튼 이벤트
  const handleOk = () => {
      alert(`${username} : ${nickname}`)
      setUsername('')
      setNickname('')
  }
  // 닉네임 Input 이벤트
  const handleNickKeydown = (e) => {
    if(e.key === 'Enter')
       handleOk()
  }

  return (
    <div>
          <h3>input 에 state 변수 활용</h3>
          <p>input value 에 상태변수를 적용하면 onChange 이벤트 꼭 필요합니다.</p>
          <hr/>
          <input type='text'
                placeholder='사용자 이름 입력하세요.'
                value={username}
                onChange={(e) => setUsername(e.target.value)}    
          />      
          {/* e.target 은 이벤트를 일으킨 요소 */}
          <input type='text'
                placeholder='사용자 닉네임 입력하세요.'
                value={nickname}
                onKeyDown={handleNickKeydown}
                onChange={(e) => setNickname(e.target.value)}
          />      
          <button onClick={handleOk}>입력완료</button>
          <div>
                  이름 : {username} , 닉네임 : {nickname}
          </div>
    </div>
  );
}

export default InputState;