import {useState} from "react"
import Counter from "./Counter"
import Bulb from "./Bulb"
import Input from "./Input"
import Input2 from "./Input2"
import AngleCalculator from "./AngleCalculator"
import CalculatorContainer from "./CalculatorContainer"
import './App.css';


function App() {

  

  const [state , setState] = useState("Initial State")

  return (
    <div className="App">
      <header className="App-header">
        Estado : {state} <br />
        
        <button onClick = {() => setState("second state")} >
          change State
        </button>

        <Counter/>

        <Bulb />

        <div>
          <h5>
            Input: <Input />
          </h5>
        </div>


        <div>
          <h5>
            Angle Calculator: <AngleCalculator />
          </h5>
        </div>



        <div>
          <h5>
            Input2: <Input2 />
          </h5>
        </div>


        <div>
          <h5>
            Calculator: <CalculatorContainer />
          </h5>
        </div>

        

      </header>
    </div>
  );
}

export default App;
