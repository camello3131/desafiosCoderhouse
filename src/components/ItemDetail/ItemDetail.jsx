import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"

function ItemDetail({data}) {
    const onAdd = (cantidad)=> {
        alert ("compraste " + cantidad + " unidades") }
  return (
    <div className='container'>
        <div className='detail'>
            <img className='detailImg' src={data.img} alt="" />
            <div className='content'>
                <h5>{data.name}</h5>
                <p>precio: $ {data.price}</p>
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail