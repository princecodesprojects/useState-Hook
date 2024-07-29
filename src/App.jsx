import './App.css'
import { useState } from 'react';



function App() {

  // let counter=5;

  let [counter,setCounter]=useState(15);

  const addValue=()=>{
    console.log("Clicked",counter)
    counter=counter+1;
    setCounter(counter)
  }

  const removeValue=()=>{
      setCounter(counter-1);
  }

  return (
    <>
      <h1>Chai our react</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
