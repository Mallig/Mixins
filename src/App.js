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
      drink: null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state === prevState) {
      console.log(this.state)
    }
  }

  changeDrink(glassType, ingredients) {
    let drink = new Drink(glassType, ingredients)
    this.setState({drink: drink})
  }

  render() {
    console.log(this.state.drink)
    return (
      <div className="App">
        Hello
        <P5Wrapper sketch={sketch} drink={this.state.drink}/>
        {drinks.map((drink) => <button onClick={this.changeDrink.bind(this, drink.glassType, drink.ingredients)}>{drink.name}</button>)}
      </div>
    );
  }
}

export default App;
