import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const devides = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
  };

  return (
    <div className="App">
      <div className="container">
        <div>
          <h1>Simplest Working Calculator</h1>
        </div>
        <form className="form">
          <p ref={resultRef}>{result}</p>
          <input
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
          />
          <button onClick={plus}>+</button>
          <button onClick={minus}> - </button>
          <button onClick={times}> * </button>
          <button onClick={devides}>÷</button>
          <button onClick={resetInput}>resetInput</button>
          <button onClick={resetResult}>resetResult</button>
        </form>
      </div>
    </div>
  );
}

export default App;
