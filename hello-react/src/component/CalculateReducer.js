import React, { useReducer, useRef, useState } from 'react';
import '../App.css'

function reducer(state,action){
    let {first, second, op , result} = state

    switch (action.type) {
      case 'ADD':
        result = first + second
        op = '+'
        break;
      case 'SUB':
        result = first - second
        op = '-'
        break;
      case 'MUL':
        result = first * second
        op = '×'
        break;
      case 'DIV':
        result = first / second
        op = '÷'
        break;
      default:
        op = '?'
        break;
    }

    return {state, op, result}

}

function Calculate() {
  const initValue = {
    first:0,
    second:0,
    op: '?',
    result: 0
  }
  const [state, dispatch] = useReducer(reducer,initValue)
  // const inputFirst = useRef(null)
  // const inputSecond = useRef(null)

  console.log('리렌더링',state)

  // OK 버튼 이벤트
   const handleCalculate = (e) => {
    const sel = e.target.id
    // const op1 = Number(inputFirst.current.value)
    // const op2 = Number(inputSecond.current.value)
    setOp(sel)
    
  }
  
  return (
    <div>
          <h3>input 에 state 변수 활용</h3>
          <p>input value 에 상태변수를 적용하면 onChange 이벤트 꼭 필요합니다.</p>
          <hr/>
          <input type='text'
                placeholder='첫번째 값을 입력하세요.'
                // ref={inputFirst}
                // value={state.first}
                // onChange={(e) => setFirst(Number(e.target.value))}
          />      
          <span id="op">{state.op}</span>
          <input type='text'
                placeholder='두번째 값을 입력하세요.'
                ref={inputSecond}
                // value={state.second}
                // onChange={(e) => setSecond(Number(e.target.value))}
          /> 
          <span id="op">=</span>
          <input type='text'
                 value={result} disabled
          />       
          <hr/>     
          <div className="calcBtn">
            <button onClick={handleCalculate} id="ADD">+</button>
            <button onClick={handleCalculate} id="SUB">-</button>
            <button onClick={handleCalculate} id="MUL">×</button>
            <button onClick={handleCalculate} id="DIV">÷</button>
          </div>
    </div>
  )
}

export default Calculate;