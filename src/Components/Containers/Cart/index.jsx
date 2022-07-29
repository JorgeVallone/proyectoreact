import React, { useContext } from 'react'
import { Shop } from '../../../context/ShopContext'
import { BsFillTrashFill } from "react-icons/bs";



const Cart = () => {

const {cart} = useContext(Shop);

console.log(cart);



  return (
    <tr>
       {cart.map(producto => {

        return <tr>
          
          <th key={producto.id}> {producto.title} 
            
          
          <img src={producto.image} width='40px' alt={producto.title} />
       
       <button><BsFillTrashFill size={30}/> </button> 
          </th>
          </tr>
 
       

      
      
   })}
  

    </tr>
  )
}

export default Cart