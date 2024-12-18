import '../App.css';
import LogicalTest from './component/LogicalTest';
import MyComponent from './component/MyComponent';
import MyComponentProps from './component/MyComponentProps';
import MyComponentProps2 from './component/MyComponentProps2';

// 첫날 수업 App.js (백업용)
function App() {

  return (
    <div className="App">
        <MyComponent/>
        <hr/>
        {/* 컴포넌트의 속성(프롭스)은 개발자가 임의로 만들 수 있습니다.
         데이터를 전달하려는 목적. (부모가 자식컴포넌트에게) */}
        <MyComponentProps title="Props(프롭스)" 
              content="props 는 여러 프로퍼티를 저장하는 객체" color="orange" />
        {/* 프롭스 값이 없을 때 오류는 아니다. */}
        <MyComponentProps/>      
        {/* 프롭스 값이 4개 -> MyComponentProps2 는 2개 값만 사용함. */}
        <MyComponentProps2 title="객체 비구조화" color="brown" 
              content="없음" name="이객체"/>    

        {/* 프롭스 값 정의 없이 컴포넌트 호출 : 초기값 적용되는지 확인 하세요. */}
        <MyComponentProps2 />

        {/* 단축 평가 활용하는 테스트 : title 프롭이 있는 경우만 컴포넌트 렌더링*/}
        <LogicalTest />
        <LogicalTest title="React"/>
        
     </div>
  );
}

export default App;
