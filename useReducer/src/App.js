import React, { useReducer } from 'react';
import './App.css';

const initialState = { count: 0 };

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="display" >
      <h1>Counter - {state.count} </h1>
      <button className="btn-increment"
        onClick={() => dispatch({ type: 'increment' })}
      >Increment</button>
      <button className="btn-decrement"
        onClick={() => dispatch({ type: 'decrement' })}
      >Decrement</button>
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      if (state.count <= 0) {
        return state;
      }
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}


export default App;
