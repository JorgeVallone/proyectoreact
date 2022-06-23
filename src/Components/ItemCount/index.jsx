import React from 'react'
import { useState } from 'react'
import './count.css'

const ItemCount = ({handleAdd, initial, stock }) => {

    const[count , setCount] = useState(initial)
    
    const onAdd = () => {
      setCount(count + 1)
      
    }
    const onDecrement = () => {
        setCount(count - 1)
    }


  return (
    <div className='containerButton'>
        <p className='countButton'>{count}</p>
        
        <button onClick={onAdd}
        disabled={count === stock ? true: null}>
        +</button>
        <button onClick={onDecrement}
        disabled={count === initial ? true: null}>
          -</button>
        <button onClick={()=> handleAdd(count)}>Agregar al carrito</button>


    </div>
  )
}

export default ItemCount