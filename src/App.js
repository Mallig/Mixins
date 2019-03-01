import React, { Component } from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'
import Drink from './drink';
import {Menu} from './Menu'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drink: null
    }
  }

  changeDrink(glassType, ingredients) {
    let drink = new Drink(glassType, ingredients)
    this.setState({drink: drink})
  }

  render() {
    return (
      <div className="App">
        <P5Wrapper sketch={sketch} drink={this.state.drink}/>
        <Menu changeDrink={this.changeDrink.bind(this)}/>
      </div>
    );
  }
}

export default App;
