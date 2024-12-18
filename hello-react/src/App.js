import './App.css';
import List from './component/List';
// import LogicalTest from './component/LogicalTest';
// import MyComponent from './component/MyComponent';
// import MyComponentProps from './component/MyComponentProps';
// import MyComponentProps2 from './component/MyComponentProps2';

// 첫날 수업 복습용 App.js
function App() {
  const twice =['사나','모모','나연','정연']

  return (
    <div className="App">
        <List names={['a','b','c','d']}/>
        <List names={twice}/>
        {/* <List /> */}
     </div>
  );
}

export default App;
