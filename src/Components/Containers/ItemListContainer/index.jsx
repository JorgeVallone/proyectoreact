import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemList from '../../ItemList'



const ItemListContainer = ({greeting}) => {
  
  const [productos, setProductos] = useState(null)
  
  useEffect(()=> {
    const getProductos = async() => {
      try {
        const response = await fetch('/mocks/data.json');
        const data = await response.json();
        console.log(data);
        setProductos(data); 
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }
    getProductos()
  }, [])
  
  
  console.log(productos);
  
  return (
    <div>
        <h1>{greeting}</h1>
      {productos ?
      <ItemList products={productos}/>
    :
    null
      }
    </div>
  )
}



export default ItemListContainer