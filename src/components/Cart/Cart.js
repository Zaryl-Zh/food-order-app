import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart = props => {
   const cartItem = <ul className={classes['cart-items']}>
           {
               [
                   {id: 'c1', name: 'sushi', amount: 2, price: 12.99}
               ].map(item => {
                   return <li key={item.id}>{item.name}</li>
               })
           }
   </ul>

  return (
    <Modal onCloseCart={props.onCloseCart}>
         {cartItem}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>44</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onCloseCart}>close</button>
            <button className={classes.button}>order</button>
        </div>
    </Modal>
  )
}

export default Cart