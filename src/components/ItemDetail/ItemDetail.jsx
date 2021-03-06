import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import {Link} from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

function ItemDetail({data}) {
    const [goToCart, setGoToCarte] = useState(false);
    const {addProduct} = useCartContext ()

    const onAdd = (quantity)=> {
        setGoToCarte(true)
        addProduct(data, quantity)
    }
  return (
    <div className='d-flex card container'>
        <div className='detail'>
            <img className='detailImg card-header' src={data.img} alt="" />
            <div className='content'>
                <div className='card-body'>
                    <h5>{data.name}</h5>
                    <p>precio: $ {data.price}</p>
                    
                    {   goToCart
                        ?<Link to="/cart">Terminar Compra</Link>
                        :<ItemCount initial={1} stock={data.stock} onAdd={onAdd} className="card-footer"/>                    
                    }
                    <p>stock disponible: {data.stock}</p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default ItemDetail