import React from 'react';

// 배열을 전달 받아서 각 원소값(요소값)으로 목록을 만들어 주는 컴포넌트.
function List({names}) {
// names 는 부모 컴포넌트가 전달한 프로퍼티
// names.map() 는 names 가 배열일 때 실행 가능합니다.
  return (
      <ul>
          {
           names.map(item => 
                 <li>{item}</li>)
          }
      </ul>
  );
}

export default List;