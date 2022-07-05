import React from 'react'
import { useCartContext } from '../../context/CartContext'
import "./itemCart.css"

const ItemCart= ({product}) => {
    const {removeProduct} = useCartContext()
  return (
    <div className='itemCart'>
        <img src={product.img} alt={product.name} />
        <div className='container-c'>
            <p>Nombre: {product.name}</p>
            <p>Cantidad: {product.cantidad}</p>
            <p>Precio u: {product.price}</p>
            <p>Subtotal: ${product.cantidad * product.price}</p>
            <button onClick={() => removeProduct(product.id)} className="btn btn-danger">Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart