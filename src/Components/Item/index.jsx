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
      
      <div className='container-detail'>
            <h1>{product.title}</h1>
            <img className='image'src={product.image} alt="product-detail" />
           
        </div>
       
    
    </div>
  </div> 
    
    )
};
export default Item

