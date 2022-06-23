import React from 'react'
import ItemCount from '../../ItemCount'

const handleAdd = (count) => {
    alert(`se agrego al carrito: ${count} productos`) 
}


const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1>{greeting}</h1>
        <ItemCount handleAdd={handleAdd} initial={0} stock={10}/>
    
    </div>
  )
}

export default ItemListContainer