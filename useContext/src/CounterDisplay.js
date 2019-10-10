import React, { useContext } from 'react';
import './App.css';
import CounterContext from './context/counter/CounterContext';

const CounterDisplay = () => {

    const { CounterState } = useContext(CounterContext);
    console.log(CounterState);
    return (
        <div className="display" >
            <h1>Counter - {CounterState.counter} </h1>
            <button className="btn-increment"
                onClick={CounterState.incrementCount}
            >Increment</button>
            <button className="btn-decrement"
                onClick={CounterState.decrementCount}
            >Decrement</button>
        </div>
    );
}

export default CounterDisplay;
