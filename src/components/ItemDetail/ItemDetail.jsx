import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"

function ItemDetail({data}) {
    const onAdd = (cantidad)=> {
        alert ("compraste " + cantidad + " unidades") }
  return (
    <div className='d-flex card container'>
        <div className='detail'>
            <img className='detailImg card-header' src={data.img} alt="" />
            <div className='content'>
                <div className='card-body'>
                    <h5>{data.name}</h5>
                    <p>precio: $ {data.price}</p>
                </div> 
                <ItemCount initial={1} stock={5} onAdd={onAdd} className="card-footer"/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail