import React from 'react'
import {Link} from "react-router-dom";
import ItemCount from '../itemCount/ItemCount'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import "./item.css"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

function Item({info}) {
  return (
    <div className='container contenedorCards'>
        <div className='card itemsCard'>
            
            <Link to={`/detalle/${info.id}`}>
            <button className='btn btn-primary'>detalles</button>
            </Link>
            <img src={info.img} alt="" className='imgProd card-body' />
        </div>
    </div>
  )
}

export default Item