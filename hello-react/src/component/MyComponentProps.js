import React from "react";    //생략 가능
// props 는 객체. 프로퍼티들이 부모 컴포넌트에서 속성으로 전달되면
//                그 값들을 저장하기 위해 인자로 정의합니다.
function MyComponentProps(props) {
  // 참고 : 객체.프로퍼티, 객체.메소드()
  const title = {
    padding: '10px',
    color: props.color
  }
  console.log('MyComponentProps props:',props)
  //받는 쪽 : props 객체는 title, content,color 3개의 프로퍼티 값을 저장합니다.
  //값을 주는 쪽 :  부모 컴포넌트가 값을 저장합니다.
  return (
    <div className='box'>
        <h3 style={title}>{props.title}</h3>
        <p>{props.content}</p>
    </div>
  );
}

export default MyComponentProps;