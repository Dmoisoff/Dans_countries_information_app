import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './countries_information_files/countries_information_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dan's Interface For Basic Information About Countries</h2>
        </div>
        <Container/>
      </div>
    );
  }
}

export default App;
