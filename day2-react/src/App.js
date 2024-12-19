import './App.css'
import CalculateV2 from './component/CalculateV2';
import InputState from './component/InputState';
import PageMove from './component/PageMove';
import Say from './component/Say';

function App(){

  return (
    <div className="App">
        <h3>Day2 App</h3>
        <Say />
        <hr/>
        <InputState/>
        <hr/>
        <CalculateV2/>
        <PageMove last={12}/>
    </div>
  )
}

export default App;