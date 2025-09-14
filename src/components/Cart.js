import React from 'react'
import { useSelector } from 'react-redux';
import RestaurantMenuItem from './RestaurantMenuItem';
const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items);
    console.info("cart items",cartItems)
  return (
    <div className=' w-1/2 m-auto'>
      <h1 className=' font-bold text-2xl text-center m-4'>Cart</h1>
      {cartItems?.map(val=> <RestaurantMenuItem key ={val.id} menuItem={val}/>)}
    </div>
  )
}

export default Cart
