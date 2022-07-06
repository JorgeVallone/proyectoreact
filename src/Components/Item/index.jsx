import React from 'react'
import './style.css';
 import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {

const navigate = useNavigate();

const handleDetail = () => {
console.log("navega hacia el detail");
navigate(`/detail/${product.id}`)

}
  return (
  <div className='cart'>
    <div  
     onClick={handleDetail}>
      
    {product.title}
       
    
    </div>
  </div> 
    
    )
};
export default Item

