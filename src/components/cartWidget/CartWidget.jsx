import React, {useContext} from 'react'
import {useCartContext} from "../../context/CartContext"
import "../cartWidget/cartWidget.css"
import {Link} from "react-router-dom"
import "https://kit.fontawesome.com/41bcea2ae3.js"


function CartWidget() {

  const {totalProducts} = useCartContext();

  return (
    <div>
        <Link to= "/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
        <span className='badge bg-danger rounded' id='totaal'>{totalProducts() || ""}</span>
    </div>
  )
}

export default CartWidget