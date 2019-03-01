import React, { Component } from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'
import Drink from './drink';
import {Menu} from './Menu'
import {drink} from './sketch'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drink: drink,
      ingredients: null,
      t: null
    }
  }

  changeDrink(glassType, ingredients) {
    let drink = new Drink(glassType, ingredients)
    this.setState({drink: drink})
  }

  onMouseUp() {
    clearTimeout(this.t)
  }

  updateIngredients() {
    this.t = setTimeout(this.updateIngredients.bind(this), 10)
    this.setState({ingredients: drink.ingredients})
  }

  render() {
    return (
      <div className="App">
        <div onMouseDown={this.updateIngredients.bind(this)} onMouseUp={this.onMouseUp.bind(this)}>
          <P5Wrapper sketch={sketch} drink={this.state.drink}/>
        </div>
        {JSON.stringify(this.state.ingredients)}
        <Menu changeDrink={this.changeDrink.bind(this)}/>
      </div>
    );
  }
}

export default App;
