import React from 'react';

function LogicalTest(props) {
  // props.title이 없으면 undefined ==> 거짓.  값이 있으면 참.
  return props.title && (
    <div>
        <h3>AND, OR 를 사용하는 단축평가 예시 - {props.title}</h3>
    </div>
  );
}

export default LogicalTest;