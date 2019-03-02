import React from 'react'
// import {IngredientsWrapper} from './ingredientsWrapper'

export const DrinkWrapper = (props) =>
    <div onClick={props.onClick}>
        {props.drink.name}
    </div>