import React from 'react'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem'

const DATA = [
    {
       id: 'm1',
       name: 'Sushi',
       description: 'Finest fish with veggies',
       price: 22.99 
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german speciality',
        price: 16.5 
     },
     {
        id: 'm3',
        name: 'Pizza',
        description: 'Finest fish with veggies',
        price: 22.99 
     },
     {
        id: 'm4',
        name: 'Burger',
        description: 'Finest fish with veggies',
        price: 22.99 
     }
]

const AvailableMeals = () => {
    const mealsList = DATA.map(meal => (
        <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
    )
    )

  return (
    <section className={classes.meals}>
        <ul>
           {mealsList}
        </ul>
    </section>
  )
}

export default AvailableMeals