import { useState } from "react"
import React from "react"      // export default 이면 { } 표시 없습니다.

// 교재 112페이지
function Say() {
  // message 변수는 `상태변수`. 
  // 값을 변경하려면 useState 가 리턴한 setXXX 메소드실행해야 합니다.-> 재렌더링
  const [message, setMessage] = useState('test')
  // useState() 인자로 message 상태변수의 기본값을 설정합니다.

  const [color , setColor] = useState('green')

  //function 키워드는 함수 컴포넌트에만 사용하고
  // 인자로 전달할 함수는 화살표 함수로 하겠습니다.
  const handleEnter = (e) => {
      // 이벤트 정보 저장하는 인자 e는 필요시에만 정의합니다.
      setMessage('환영합니다.')
  }

  const handleOut = (e) => {
    // 이벤트 정보 저장하는 인자 e는 필요시에만 정의합니다.
      // message = '어서 가세요.'   // 재렌더링 못함.
      setMessage('Good Bye!!')
  }

  const handleSkyBlue = () => {
     setColor('skyblue')
  }
  const handleOrange = () => {
     setColor('orange')
  }
  const handlePink = () => {
     setColor('pink')
  }

  // onClick 속성값은 이벤트 처리 함수가 되어야 합니다.
  // JSX 문법 안에서는 {} 자바스크립트 코드값(변수,수식,함수,객체,배열,문자열,number..) 작성
  return (
    <div>
        <button onClick={handleEnter}>입장</button>
        <button onClick={handleOut}>퇴장</button>
        {/* {color: color} 에서 변수이름 생략 */}
        <h3 style={{color}}>{message}</h3>    
        {/* 버튼 3개를 만들어서 어떤 버튼 클릭이냐에 따라 h3 태그 색상 변경 */}
        <button onClick={handleSkyBlue}>스카이블루</button> 
        <button onClick={handleOrange}>오렌지</button> 
        <button onClick={()=> setColor('pink')}>핑크</button> 
    </div>
  )
}

export default Say;