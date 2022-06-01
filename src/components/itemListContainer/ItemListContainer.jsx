import React from 'react'

function ItemListContainer(props) {
    const {param1} = props
    const {param2} = props
  return (
      <>
      <h1 className='h1 text-center'>{param1}</h1>
      <h4 className='h4 text-center'>{param2}</h4>
      </>
  )
}

export default ItemListContainer
