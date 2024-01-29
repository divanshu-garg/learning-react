import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  let [counter, setCounter] = useState(15);
  // let counter = 5

  const addValue = function () {
    console.log("clicked", Math.random());
    if (counter > 19) {
    } else {
    setCounter((counter += 1)); }
  };
  const removeValue = function () {
    console.log("clicked", Math.random());
    if (counter === 0) {
    } else {
      setCounter((counter -= 1));
      
    }
  };
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <br />
    </>
  );
}

export default App;
