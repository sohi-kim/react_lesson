import './App.css'
import CalculateRef from './component/CalculateRef';
import InputState from './component/InputState';
import Say from './component/Say';

function App(){

  return (
    <div className="App">
        <h3>Day2 App</h3>
        <Say />
        <hr/>
        <InputState/>
        <hr/>
        <CalculateRef/>
    </div>
  )
}

export default App;