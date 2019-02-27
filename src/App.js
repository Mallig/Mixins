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
      glassDraw: [],
      ingredientsDraw: []
    }
  }

  changeDrink(glassType, ingredients) {
    let drink = new Drink(glassType, ingredients)
    this.setState({ glassDraw: drink.glassDraw(),
                    ingredientsDraw: drink.ingredientsDraw()})
  }

  render() {
    return (
      <div className="App">
        Hello
        <P5Wrapper sketch={sketch} glassDraw={this.state.glassDraw} ingredientsDraw={this.state.ingredientsDraw}/>
        {drinks.map((drink) => <button onClick={this.changeDrink.bind(this, drink.glassType, drink.ingredients)}>{drink.name}</button>)}
      </div>
    );
  }
}

export default App;
