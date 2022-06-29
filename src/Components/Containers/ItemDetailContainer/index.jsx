import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../ItemDetail'


const ItemDetailContainer = () => {

const[productDetail, setProductDetail] = useState({})

useEffect(() => {
const getProductos = async () => {

    try {
 
        const response = await fetch ('https://fakestoreapi.com/products/2')
        const data = await response.json();
        setProductDetail(data)
} catch (error) {
    console.log(error)
}    
}
getProductos();
}, [])

    return (
  
    <ItemDetail product={productDetail}/>   
  )
}



export default ItemDetailContainer
