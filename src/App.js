import React, { Component } from 'react';
import './App.css';

import Swatch from './components/swatch';
import TestColour from './components/testColour';

class App extends Component {  

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      checkColour: '#9EA2A4'
    }
  }

  swatches = [
    {name: 'tarmac', colour: '#0C161C'},
    {name: 'tarmac-light-10', colour: '#242D33'},
    {name: 'tarmac-light-20', colour: '#3D4549'},
    {name: 'tarmac-light-60', colour: '#9EA2A4'},
    {name: 'tarmac-light-70', colour: '#B6B9BB'},
    {name: 'tarmac-light-80', colour: '#CED0D2'},
    {name: 'chalk-dark-10', colour: '#E0E1E1'},
    {name: 'chalk', colour: '#F9FAFA'},
    {name: 'chalk-light-20', colour: '#FFFFFF'},
    {name: 'yellow-dark-10', colour: '#DEE517'},
    {name: 'yellow', colour: '#F7FF1A'},
    {name: 'yellow-light-50', colour: '#FBFF8C'}
  ]  

  input = {
    margin: '10px',
    fontSize: '1.5rem'
  }

  handleChange(e) {
    this.setState({checkColour: e.target.value})
  }

  render() {
    return (
      <div className="App">

        <label>Enter Hex colour
          <input style={this.input} value={this.state.checkColour} onChange={this.handleChange}/>
        </label>

        <div style={{display: 'flex'}}>
          {this.swatches.map(i => 
            <Swatch swatch={i}></Swatch>
          )}
        </div>        

        <TestColour colour={this.state.checkColour}></TestColour>

      </div>
    );
  }
}

export default App;
