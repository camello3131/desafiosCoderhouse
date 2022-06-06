import React from 'react'
import ItemCount from '../itemCount/ItemCount'

function ItemListContainer(props) {

  const onAdd = (cantidad)=> {
    alert ("compraste " + cantidad + " unidades")
  }
    const {param1} = props
    const {param2} = props


  return (
      <>
      <div className='h1 text-center'>{param1}</div>
      <h4 className='h4 text-center'>{param2}</h4>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      </>
  )
}

export default ItemListContainer
