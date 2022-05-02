import React from 'react'
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return <>
    <header className={classes.header}>
        <h1>react meals</h1>
        {/* <button>Cart</button> */}
        <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} />
    </div>
  </>
    
  
}

export default Header