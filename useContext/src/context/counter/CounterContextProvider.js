import React from 'react';
import CounterContext from './CounterContext';

class CounterContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            error: ''
        };

    }

    incrementCount = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    decrementCount = () => {
        if (this.state.counter > 0) {
            this.setState({ counter: this.state.counter - 1 })
        }
    }

    render() {

        return (
            <div className="App" >
                <CounterContext.Provider value={{
                    CounterState: {
                        ...this.state,
                        incrementCount: this.incrementCount,
                        decrementCount: this.decrementCount
                    }
                }}>
                    {this.props.children}
                </CounterContext.Provider>
            </div>
        );
    }
}


export default CounterContextProvider;

