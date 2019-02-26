import React, { Component } from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'
import Drink from './drink';
import {drinks} from './drinks';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      glass: "",
      glassDraw: []
    }
  }

  changeGlass(glassType) {
    this.setState({ glass: glassType,
                    glassDraw: new Drink(glassType).glassDraw()
                  })
  }

  render() {
    return (
      <div className="App">
        Hello
        <P5Wrapper sketch={sketch} glassDraw={this.state.glassDraw}/>
        {drinks.map((drink) => <button onClick={this.changeGlass.bind(this, drink.glass)}>{drink.name}</button>)}
      </div>
    );
  }
}

export default App;
