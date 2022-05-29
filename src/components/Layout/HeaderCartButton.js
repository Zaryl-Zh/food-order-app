import React, { useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import { useContext } from 'react'
import CartContext from '../../store/cart-contex'

const HeaderCartButton = props => {
     const [btnIsHighlited, setBtnIsHighlited] = useState(false);
      const cartCtx = useContext(CartContext);

      const{items} = cartCtx;
      useEffect(() => {
          if(items.length === 0){
              return;   
          }
          setBtnIsHighlited(true);
          const timer = setTimeout(()=>{
              setBtnIsHighlited(false);
          }, 300);
          return () => {
              clearTimeout(timer)
          }
      }, [items])


    
      const numberOfCartItems = cartCtx.items.reduce((currentNumber,item) => {
           return currentNumber + item.amount;
      }, 0);

      const btnClasses = `${classes.button} ${btnIsHighlited ? classes.bump : ''}`;

  return <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
          <CartIcon/>
      </span>
      <span>
          Your Cart
      </span>
      <span className={classes.badge}>
          {numberOfCartItems}
      </span>
      
  </button>
}

export default HeaderCartButton