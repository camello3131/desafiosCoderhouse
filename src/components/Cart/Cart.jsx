import React from 'react'
import {useCartContext} from "../../context/CartContext"
import {Link} from "react-router-dom"
import ItemCart from '../CartItem/ItemCart';
import {addDoc, collection, getFirestore} from "firebase/firestore"
import "./cart.css"


const Cart = () =>{
  const {cart, totalPrice} = useCartContext();

  const order = {
    buyer: {
      name: "Lucas",
      email: "lucasbritosboccazzi@outlook.com",
      phone: "448144",
      addres: "assss"
    },
    items: cart.map(product => ({id: product.id, nombre: product.name, precio: product.price, cantidad: product.cantidad})),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore()
    const orderCollection = collection(db,"orders")

    addDoc (orderCollection, order)
      .then(({id}) => console.log(id))
  }

  if (cart.length === 0) {
    return (
      <>
          <div className='container'>
            <p>No hay elementos en el carrito</p>
            <Link to= "/"><button className='btn btn-success'>Hacer compras</button></Link>
          </div>
      </>
    );
  }
  
  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <div className='container'>
        <p>
          total: {totalPrice()}
        </p>
        <button onClick={handleClick} className="btn btn-success" >Generar Orden</button>
      </div>

    </>
  )
}

export default Cart