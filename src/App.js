import React, { Component } from 'react';
import './App.css';
import Input from './Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <Input />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
