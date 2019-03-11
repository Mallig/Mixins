import React from 'react'
import {drinks} from './drinks'
import {DrinkWrapper} from './drinkWrapper'

export const Menu = (props) =>
    <div className="Menu">
        <h2>
            Peruse our menu of the finest drinks in town, you're sure to find something to your taste
        </h2>
        <div className="drinks">
            {drinks.map((drink) => <button onClick={props.changeDrink.bind(this, drink.glassType, drink.ingredients)}>{drink.name}</button>)}
        </div>
    </div>
