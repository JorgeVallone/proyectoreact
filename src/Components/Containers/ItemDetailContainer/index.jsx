import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../../ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import {doc, getDoc} from "firebase/firestore";
import { db } from '../../../firebase/config';

const ItemDetailContainer = () => {

const[productDetail, setProductDetail] = useState({})

const params = useParams()

useEffect(() => {
const getProductos = async () => {

    try {

        const docRef = doc(db, "products", params.productId);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log(docSnap.id)
    console.log("Document data:", docSnap.data());
    const productDetail = {id: docSnap.id, ...docSnap.data()}
    setProductDetail(productDetail)
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}

 
       /*  const response = await fetch (`https://fakestoreapi.com/products/${params.productId}`)
        const data = await response.json();
        setProductDetail(data) */
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
