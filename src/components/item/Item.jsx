import React from 'react'
import {Link} from "react-router-dom";
import ItemCount from '../itemCount/ItemCount'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import "./item.css"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

function Item({info}) {
  return (
    <div className='container contenedorCards'>
        <div className='card itemsCard '>
            <img src={info.img} alt="" className='imgProd card-body' />
            <Link to={`/detalle/${info.id}`}>
                <button className='btn btn-outline-primary'>Ver Detalles</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Item