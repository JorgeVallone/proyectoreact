import React from 'react'
import './CartWidget.css'
import { FcShop } from "react-icons/fc";import { useContext } from 'react';
import { Shop } from '../../context/ShopContext';
;




const CartWidget = () => {

  const {cart} = useContext(Shop);

  return (
    <div>

      < FcShop size={30} className='cartWidgetCompra'/>
     {cart.length && <span>({cart.length})</span>}

    </div>
    
  )
}

export default CartWidget