import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleChart from './components/ExampleChart';
import Dynamic from './components/EchartExample';
import GCalendar from './components/AnotherTestGraphic';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <ExampleChart />
          <Dynamic />
          <GCalendar />
        </div>
      </div>
    );
  }
}

export default App;
