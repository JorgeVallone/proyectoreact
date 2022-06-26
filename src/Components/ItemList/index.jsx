    import React from 'react'
import Item from '../Item'
    
    const ItemList = ({products}) => {
      return (
        <div>
       {products.map(producto => {
        return <Item product={producto} key={producto.id}/>
       })}     
        </div>
      )
    }
    
    export default ItemList