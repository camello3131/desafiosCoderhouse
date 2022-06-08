import React, {useState, useEffect} from 'react'
import ItemList from '../item/ItemList'
import ItemCount from '../itemCount/ItemCount'

const productos = [
  {
      id: 1,
      name: "producto1",
      price: 15,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bouteille_de_Coca-Cola_d%27un_litre_cinq_001.jpg/220px-Bouteille_de_Coca-Cola_d%27un_litre_cinq_001.jpg"
  }, 
  {
      id: 2,
      name: "producto2",
      price: 15,
      img: "https://madistribucion.com/wp-content/uploads/2021/02/7up.png"
  }, 
  {
      id: 3,
      name: "producto3",
      price: 15,
      img: "https://carrefourar.vtexassets.com/arquivos/ids/220123/7790895000454_02.jpg?v=637704294056530000"
  }, 
]



function ItemListContainer(props) {

  const [data, setData] = useState ([])

  useEffect(()=>{
    const getData = new Promise (resolve => {
      setTimeout(() => {
        resolve (productos)
      }, 2000);
    })

    getData.then (res => setData(res))
  }, [])

  const onAdd = (cantidad)=> {
    alert ("compraste " + cantidad + " unidades")
  }
  return (
      <>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      <ItemList data={data}/>
      </>
  )
}

export default ItemListContainer
