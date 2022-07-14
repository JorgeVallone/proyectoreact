import React, { createContext, useState } from 'react'


export const Shop = createContext();

const ShopProvider = ({children}) => {

  const [estadoA, setEstadoA] = useState("Valor por defecto")

  const [cart, setCart] = useState([]);

  const addItem = (producto , cantidad) => {

    console.log(producto, cantidad);

    const productoRepetido = isInCart(producto);
    console.log(productoRepetido);

    if (productoRepetido){

      productoRepetido.quantity += cantidad
      setCart([...cart])
    } else{

      setCart([...cart, {...producto, quantity: cantidad}])

    }

  }

/*Eliminar*/
const removeItem = (id) => {
  const productosFiltrados = cart.filter(producto => producto.id !== id)
  setCart(productosFiltrados);
}

const isInCart = (producto) => {
  return cart.find(elemento => elemento.id === producto.id)
}

  return (
<Shop.Provider value={{estadoA, setEstadoA, addItem, removeItem, cart}}>
    {children}
</Shop.Provider>


    )
}

export default ShopProvider