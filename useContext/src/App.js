import React from 'react';
import './App.css';
import CounterContextProvider from './context/counter/CounterContextProvider';
import CounterDisplay from './CounterDisplay';

class App extends React.Component {



  render() {
    return (
      <div className="App" >
        <CounterContextProvider>
          <CounterDisplay />
        </CounterContextProvider>
      </div>
    );
  }
}

export default App;
