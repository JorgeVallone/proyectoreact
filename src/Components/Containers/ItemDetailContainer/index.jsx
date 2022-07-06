import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../../ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../../Loader/Loader';



const ItemDetailContainer = () => {

const[productDetail, setProductDetail] = useState({})

const params = useParams()

useEffect(() => {
const getProductos = async () => {

    try {
 
        const response = await fetch (`https://fakestoreapi.com/products/${params.productId}`)
        const data = await response.json();
        setProductDetail(data)
} catch (error) {
    console.log(error)
}    
}
getProductos();
}, [params])

    return (
        Object.keys(productDetail).length !== 0 ?
    <ItemDetail product={productDetail}/> 
    :
    <Loader/>  
  )
}



export default ItemDetailContainer
