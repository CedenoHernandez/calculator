import React, {Component} from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeypadComponent from './components/KeypadComponent';

class App extends Component {
    constructor() {
        super();
        this.state = {
            result: ""
        }
    }
    render() {
        return (
            <div>
                <KeypadComponent />
                <ResultComponent />
            </div>
        )
    }
}

export default App;
