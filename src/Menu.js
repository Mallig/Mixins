import React from 'react'
import {drinks} from './drinks'
import {DrinkWrapper} from './drinkWrapper'

export const Menu = (props) =>
    <div>
        Peruse our menu of the finest drinks in town, you're sure to find something to your taste

        {drinks.map((drink) => <DrinkWrapper drink={drink} onClick={props.changeDrink.bind(this, drink.glassType, drink.ingredients)}/>)}
    </div>
