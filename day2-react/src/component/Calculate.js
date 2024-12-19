import React,{ useState } from 'react';

function Calculate() {
// useState 함수로 만들어진 상태변수는 값이 바뀔 때마다 
// 모든 변수값이 새로 계산되고 그 값으로 재(re)렌더링 합니다.
// 단, 상태 변수는 이전 값(상태)는 유지됩니다.
    const [first,setFirst] = useState('')
    const [second,setSecond] = useState('')
    const [result,setResult] = useState('')

    console.log('값 =',first,second)
   
    const handleAdd = () => {
        setResult(Number(first) + Number(second))
    }
    const handleSub = () => {
        setResult(first - second)
     }
     const handleMul = () => {
        setResult(first * second)
     }
     const handleDiv = () => {
        setResult(first / second)
     }
    
    return (
        <div>
            <h3>계산기</h3>
            <input type='number'
            placeholder='첫번째 숫자를 입력하세요'
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            />

            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
            <button onClick={handleMul}>*</button>
            <button onClick={handleDiv}>/</button>

             <input type='number'
            placeholder='두번째 숫자를 입력하세요'
            value={second}
            onChange={(e) => setSecond(e.target.value)}
            />
            <span>= {result}</span>
            <hr/>
        </div>
    );
}

export default Calculate;