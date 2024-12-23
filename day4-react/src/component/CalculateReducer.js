import React, { useReducer, useRef, useState } from 'react';
import '../App.css'

function reducer(state,action){
    let {first, second, op , result} = state

    switch (action.type) {
      case 'FIRST':
        first = action.payload
        break;
      case 'SECOND':
        second = action.payload
        break;
      case 'ADD':
        result = Number(first) + Number(second)
        op = '+'
        break;
      case 'SUB':
        result = first - second
        op = '-'
        break;
      case 'MUL':   //1)
        result = first * second
        op = '×'
        break;
      case 'DIV':  //2)
        result = first / second
        op = '÷'
        break;
      default:
        op = '?'
        break;
    }

    // return {first:first, second:second, op:op, result:result}  
    return {first, second,op,result}  
    //3) 초기 프로퍼티들을 모두 포함한 객체 리턴

}

function Calculate() {
  const initValue = {
    first:0,
    second:0,
    op: '?',
    result: 0
  }
  const [state, dispatch] = useReducer(reducer,initValue)

  console.log('Calculate Reducer 리렌더링',state)

  // 연산 버튼
   const handleCalculate = (e) => {
    dispatch({type:e.target.id})
  }
  
  return (
    <div>
          <h3>input 에 state 변수 활용</h3>
          <p>input value 에 상태변수를 적용하면 onChange 이벤트 꼭 필요합니다.</p>
          <hr/>
          <input type='text'
                placeholder='첫번째 값을 입력하세요.'
                value={state.first}
                onChange={(e) => dispatch({type: 'FIRST',payload: e.target.value})}
          />      
          <span id="op">{state.op}</span>
          <input type='text'
                placeholder='두번째 값을 입력하세요.'
                value={state.second}
                onChange={(e) => dispatch({type: 'SECOND',payload: e.target.value})}
          /> 
          <span id="op">=</span>
          <input type='text'  disabled
                 value={state.result}      
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