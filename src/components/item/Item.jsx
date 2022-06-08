import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import "./item.css"

function Item({info}) {
  return (
    <div className='container contenedorCards'>
        <div className='card itemsCard'>
            <img src={info.img} alt="" className='imgProd card-body' />
            <p className='card-footer'>{info.name}</p>
        </div>
    </div>
  )
}

export default Item