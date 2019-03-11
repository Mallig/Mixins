import React, { Component } from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'
import Drink from './drink';
import {Menu} from './Menu'
import {drink, canvasWidth} from './sketch'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drink: drink,
      ingredients: null,
      t: null,
      canvasScale: 4,
      canvasWidth: canvasWidth
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateCanvasDimensions.bind(this))
    if (window.innerWidth > 900) {this.setState({canvasScale: 4})}
    if (window.innerWidth < 900) {this.setState({canvasScale: 2})}
  }

  updateCanvasDimensions() {
    this.setState({canvasWidth: canvasWidth})
    if (window.innerWidth > 900) {this.setState({canvasScale: 4})}
    if (window.innerWidth < 900) {this.setState({canvasScale: 2})}
    let drinkReset = this.state.drink
    if (this.state.drink) { this.setState({ drink: new Drink(drinkReset.glassType, drinkReset.ingredients, this.state.canvasScale, this.state.canvasWidth)}) }
  }

  changeDrink(glassType, ingredients) {
    let drink = new Drink(glassType, ingredients, this.state.canvasScale, this.state.canvasWidth)
    this.setState({drink: drink, ingredients: drink.ingredients})
  }

  onMouseUp() {
    clearTimeout(this.t)
  }

  updateIngredients() {
    if (this.state.drink) {
      this.t = setTimeout(this.updateIngredients.bind(this), 1000)
      this.setState({ingredients: drink.ingredients})
    }
  }

  render() {
    return (
      <div className="App">
        {/* <DrinkWrapper /> */}
        <div className="DrinkCanvas" onMouseDown={this.updateIngredients.bind(this)} onMouseUp={this.onMouseUp.bind(this)}>
          <P5Wrapper sketch={sketch} drink={this.state.drink}/>
          {JSON.stringify(this.state.ingredients)}
        </div>
        <Menu changeDrink={this.changeDrink.bind(this)}/>
        <div className="IngredientsFilter">
        </div>
      </div>
    );
  }
}

export default App;
