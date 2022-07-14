import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Shop } from '../../context/ShopContext';
import ButtonCount from '../ButtonCount';
import './styles.css'

const ItemDetail = ({ product }) => {

    const navigate = useNavigate();

    product.stock = 10;
    const [qtyAdded, setQtyAdded] = useState(0);

    const {addItem} = useContext (Shop)

    const handleConfirm = (qty) => {
        setQtyAdded(qty);

    }
    console.log(qtyAdded)
    
    const handleTerminate = () => {
        addItem(product, qtyAdded)
        navigate('/cart')

    }


    console.log(product);
    return (
        <div className='container-detail'>
            <h1>{product.title}</h1>
            <img className='image'src={product.image} alt="product-detail" />
            <p className='productDescription'>{product.description}</p>
            {!qtyAdded ?  

            <ButtonCount onConfirm={handleConfirm} maxQuantity={product.stock} />
            :
            <button onClick={handleTerminate}>Terminar compra</button>
        }    

        return(
            <button onClick={handleTerminate}>Terminar compra</button>

        )                                                                                                                                                                                                                                                                                                                                                                                           
        </div>
    )
}
export default ItemDetail