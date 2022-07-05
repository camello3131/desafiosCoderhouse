import React from 'react'
import {Link} from "react-router-dom";
import "./item.css"

function Item({info}) {

  return (
    <div className='contenedorCards'>
        <div className='card itemsCard '>
            <img src={info.img} alt="" className='imgProd card-body' />
            <hr />
            <p className='title'>{info.name}</p>
            <Link to={`/detalle/${info.id}`}>
                <button className='btn btn-outline-primary'>Ver Detalles</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Item