import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemList from '../../ItemList'
import Loader from '../../Loader/Loader'



const ItemListContainer = ({greeting}) => {
  
  const [productos, setProductos] = useState([])
  
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
      {productos.length !==0 ?
      <ItemList products={productos}/>
    :
    <Loader/>
      }
    </div>
  )
}



export default ItemListContainer