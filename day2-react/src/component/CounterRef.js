import React, { useRef, useState } from 'react';

function CounterRef() {
  //사용방법 2 - 순수 데이터 저장할 일반 변수를 useRef 로 선언
  const countRef = useRef(2)
  const [count, setCount] = useState(10)

  const handleCount = () => setCount(count+1)
  const handleCountRef = () => countRef.current +=1

  console.log('CounterRef 렌더링:',countRef)
  return (
    <div>
       <p>state 카운터 : {count}</p>
       {/* useRef 로 만든 변수가 DOM 요소 참조할 때에는 변수명.current.value
           와 같이 추가 속성 지정하고, 
           DOM 요소 아니고 일반 데이터는 변수명.current 로 값을 가져옵니다.
       */}
       <p> ref 카운터 : {countRef.current} </p>
       <button onClick={handleCount}>state 카운트</button>
       <button onClick={handleCountRef}>ref 카운트</button>
    </div>
  );
}

export default CounterRef;