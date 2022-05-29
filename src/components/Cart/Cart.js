import React, { useContext, useState} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-contex'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(CartContext)

    const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = item => {
        cartCtx.addItem({
            ...item,
            amount:1
        })
    }

    const orderHandler = item => {
        setIsCheckout(true)
    }

    const submitOrderHandler = userData => {
        fetch('https://food-order-fetch-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items 
            })
        }
        )
    }

    const cartItem = <ul className={classes['cart-items']}>
    {
        cartCtx.items.map(item => (
            <CartItem 
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
        ))
    }
</ul>

const modalActions =  <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>close</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>

  return (
    <Modal onCloseCart={props.onCloseCart}>
         {cartItem}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onCloseCart}/>}
        {!isCheckout && modalActions}
    </Modal>
  )
}

export default Cart