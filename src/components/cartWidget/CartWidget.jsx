import React, {useContext} from 'react'
import {useCartContext} from "../../context/CartContext"
import "../cartWidget/cartWidget.css"
import {Link} from "react-router-dom"

function CartWidget() {

  const {totalProducts} = useCartContext();

  return (
    <div>
        <Link to= "/cart"><button className='btn btn-outline-primary'>Cart</button></Link>
        <span>{totalProducts() || ""}</span>
    </div>
  )
}

export default CartWidget