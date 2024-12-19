import React, { useState } from 'react';

// 연습 문제
// 버튼 2개로 페이지 번호를 앞 또는 뒤로 이동
// 상태 변수 1개
function PageMove({last=1}) {
  // 전체 페이지 개수로 last 값 설정. 부모 컴포넌트에서 전달
  // const last = 29
  // 페이지 번호는 1 ~ last 범위에서만 변경합니다.
  const [pageno, setPageno] = useState(5)
  const handlePrev =() => {
      // -1
      setPageno(pageno-1)
  }
  const handleNext =() => {
      // +1
      setPageno(pageno+1)
  }

  return (
    <div>
        <h2>상태 변수값을 button 속성 설정에 활용하기</h2>
        <h3>현재 페이지 번호 : {pageno}</h3>
        <button onClick={handlePrev} disabled={pageno===1}
                style={{fontSize:'20px'}}>&lt;</button>
        <button onClick={handleNext} disabled={pageno===last}
                style={{fontSize:'20px'}}>&gt;</button>
    </div>
  );
}

export default PageMove;