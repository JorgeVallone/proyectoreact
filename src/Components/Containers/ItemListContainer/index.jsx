import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../ItemList'
import Loader from '../../Loader/Loader'
import InputCount from '../../InputCount/InputCount'
import ButtonCount from '../../ButtonCount'



const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])

  const params = useParams()

  console.log(params);

  useEffect(() => {

    const getProductos = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json()
        setProductos(data);
        setProductosFiltrados(data);
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }
    getProductos()
  }, [])

  useEffect(() => {
    if (params?.categoryId) {
      const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
      setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(productos)
    }
  }, [params, productos])

  console.log(productos);

  const handleConfirm = (quantity) => {
    console.log("Se agrego la cantidad:" + quantity);
  }
  const type = "input"

  const Count = type === "button" ? ButtonCount : InputCount;



  return (
    <div>
      {productos.length !== 0 ?

      
        <ItemList products={productosFiltrados} />
        :
    <Loader/>
      }
    </div>
  )
}

export default ItemListContainer