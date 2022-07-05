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
      addres: "assss",
      cuit: "122112"
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
          Total de la compra: $ {totalPrice()}
        </p>

          <form action="" className='container form-group'>
            <label htmlFor="">
              <input type="text" className='form-control' placeholder='Nombre' />
            </label>
            <label htmlFor="">
              <input type="text" className='form-control' placeholder='Apellido' />
            </label> <br />
            <label htmlFor="">
              <input type="email" className='form-control' placeholder='Email' />
            </label>
            <label htmlFor="">
              <input type="text" className='form-control' placeholder='Telefono' />
            </label> <br />
            <label htmlFor="">
              <input type="text" className='form-control' placeholder='Direccion' />
            </label>
            <label htmlFor="">
              <input type="text" className='form-control' placeholder='CUIT/CUIL' />
            </label> <br />
            <button type='' className='btn btn-primary mb-2' onClick={handleClick} id='submitButton'>Generar Orden</button>
        </form>
      </div>

    </>
  )
}

const btn = document.getElementById('submitButton')


export default Cart