import React from 'react'
import './style.css';

const Item = ({product}) => {
  return (

 <div className='container'>
        

  <div className='card'>
  <img src={product.image} alt="Avatar"/>
    <div>
     <h4>{product.title}</h4> 
     <p>{product.id}</p> 
     <p>{product.price}</p> 
     <p><button>Add to Cart</button></p>
    </div>
  </div> 
 </div>  
    
    
  );
};

export default Item

