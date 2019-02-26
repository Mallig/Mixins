import React, { Component } from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'
import Drink from './drink';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      glass: "cocktail",
      glassDraw: []
    }
  }

  getGlass() {
    return this.state.glassDraw
  }

  // changeGlass() {
  //   if (this.state.glass === "cocktail") {
  //     this.setState({glass: "tumbler"})
  //   } else if (this.state.glass === "tumbler") {
  //     this.setState({glass: "cocktail"})
  //   }
  //   var drink = new Drink(this.state.glass)
  //   this.setState({glassDraw: drink.glassDraw()})
  // }

  changeGlassToCocktail() {
    let drink = new Drink("cocktail")
    this.setState({glass: "cocktail", glassDraw: new Drink("cocktail").glassDraw()})
  }

  changeGlassToTumbler() {
    this.setState({glass: "tumbler", glassDraw: new Drink("tumbler").glassDraw()})
  }

  render() {
    return (
      <div className="App">
        Hello
        <P5Wrapper sketch={sketch} glassDraw={this.state.glassDraw}/>
        <button onClick={this.changeGlassToTumbler.bind(this)}>Tumbler</button>
        <button onClick={this.changeGlassToCocktail.bind(this)}>Cocktail</button>
      </div>
    );
  }
}

export default App;
