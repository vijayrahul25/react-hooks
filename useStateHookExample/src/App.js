import React, { useState } from 'react';
import './App.css';

const App = () => {

  // Declare a new state variable, which we'll call "count"
  const [counter, setCounter] = useState(0);

  // Declare multiple (some more) state variables!
  const [name, setName] = useState('');

  const incrementCount = () => {
    setCounter(counter => counter + 1);
  }

  const decrementCount = () => {
    if (counter > 0) {
      setCounter(counter => counter - 1)
    }
  }

  const setInputValue = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="App" >
      <h1>Counter - {counter} </h1>
      <button className="btn-increment"
        onClick={incrementCount}
      >Increment</button>
      <button className="btn-decrement"
        onClick={decrementCount}
      >Decrement</button>
      <>
        <br /><br />
        <label>Second state hooke test,Please input your name: </label>
        <input type="text" value={name} onChange={setInputValue}></input>
        <br />
        your name is <b>{name}</b>
      </>
    </div>
  );
}


export default App;
