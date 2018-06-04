import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import Knight from './knight/knight';
import Square from './square/square';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Square>    
                    <Knight />
                </Square>                    
            </div>
        );
    }
}

export default App;