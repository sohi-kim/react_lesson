import React, { useRef, useState } from 'react';
import '../App.css'

function CalculateRef() {
// useState 훅으로 정의한 변수는 상태 변수 => useRef 훅으로 변경
  // const [first,setFirst] = useState(0)
  // const [second,setSecond] = useState(0)
  const [op,setOp] = useState('')
  const [result, setResult] = useState(0)

  // useState 로 만든 상태변수를 변경함.input 2개 입력은 상태 변수에서 제외함.
  // 화면을 다시 만들어야 하는 필요성은 연산버튼을 클릭할 때 뿐입니다.
  // useRef 는 상태를 계속 유지하는 방법이 필요할 때 state 대신 사용합니다.
  
  // 사용방법 1 - DOM요소를 ref 변수로 지정한다.
  const first = useRef()
  const second = useRef()
  const message = useRef()

  console.log('CalculateRef 리렌더링',first, second)
 
  const hello = () => {
       alert("인사 👩" +  message.current.value)
  }


  // 계산 버튼 4개 이벤트
  const handleCalculate = (e) => {
      const sel = e.target.innerHTML
// useRef 로 만들어진 변수는 current 라는 속성이 있고 이 속성으로
//  필요한 데이터를 가져옵니다. input 요소에 입력된 값을 가져옵니다.
      const op1 = Number(first.current.value)
      const op2 = Number(second.current.value)
      setOp(sel)
      switch (sel) {
        case '+':
          setResult(op1+op2)
          break;
        case '-':
          setResult(op1-op2)
          break;
        case '×':
          setResult(op1*op2)
          break;
        case '÷':
          setResult(op1/op2)
          break;
        default:
          setResult(0)
          break;
      }
  }
  
  return (
    <div>
          <h3>input 에 ref 활용</h3>
          <p>입력 요소에 상태 변수를 사용하지 않고 ref 속성으로 DOM 요소 상태
            저장합니다. ref 변수 정의는 useRef 훅(함수)로 합니다.
          </p>
          <hr/>
          <input type='text'
                placeholder='첫번째 값을 입력하세요.'
                ref={first}
                // value={first} 
                // onChange={(e) => setFirst(Number(e.target.value))}
          />      
          <span id="op">{op}</span>
          <input type='text'
                placeholder='두번째 값을 입력하세요.'
                ref={second}
                // value={second}
                // onChange={(e) => setSecond(Number(e.target.value))}
          /> 
          <span id="op">=</span>
          <input type='text'
                 value={result} disabled
          />       
          <hr/>     
          <div className="calcBtn">
            <button onClick={handleCalculate}>+</button>
            <button onClick={handleCalculate}>-</button>
            <button onClick={handleCalculate}>×</button>
            <button onClick={handleCalculate}>÷</button>
          </div>
          <div>
                  <h4>새로운 입력 요소로 테스트</h4>
                  {/* ref 속성에 쓰인 변수는 useRef 로 선언합니다. */}
                  <input type='text' ref={message}/>
                  <button onClick={hello}>인사하기</button>
          </div>
    </div>
  )
}

export default CalculateRef;