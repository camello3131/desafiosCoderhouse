import React, {useState, useEffect} from 'react'
import ItemList from '../item/ItemList'
import ItemCount from '../itemCount/ItemCount'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'

const productos = [
  {
      id: 0,
      name: "coca",
      price: 15,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bouteille_de_Coca-Cola_d%27un_litre_cinq_001.jpg/220px-Bouteille_de_Coca-Cola_d%27un_litre_cinq_001.jpg",
      categoria: "gaseosas"
  }, 
  {
      id: 1,
      name: "7 up",
      price: 14,
      img: "https://madistribucion.com/wp-content/uploads/2021/02/7up.png",
      categoria: "gaseosas"
  }, 
  {
      id: 2,
      name: "fanta",
      price: 13,
      img: "https://carrefourar.vtexassets.com/arquivos/ids/220123/7790895000454_02.jpg?v=637704294056530000",
      categoria: "gaseosas"
  }, 
  {
      id: 3,
      name: "otra fanta",
      price: 16,
      img: "https://carrefourar.vtexassets.com/arquivos/ids/220123/7790895000454_02.jpg?v=637704294056530000",
      categoria: "gaseosas"
  }, 
  {
      id: 4,
      name: "otra otra fanta",
      price: 17,
      img: "https://carrefourar.vtexassets.com/arquivos/ids/220123/7790895000454_02.jpg?v=637704294056530000",
      categoria: "gaseosas"
  },
  {
      id: 5,
      name: "Cerveza 1",
      price: 17,
      img: "https://www.cocinista.es/download/bancorecursos/ingredientes/ingrediente-clarificante-cerveza.jpg",
      categoria: "cervezas"
  },
  {
      id: 6,
      name: "Cerveza 2",
      price: 17,
      img: "https://www.cocinista.es/download/bancorecursos/ingredientes/ingrediente-clarificante-cerveza.jpg",
      categoria: "cervezas"
  },
  {
      id: 7,
      name: "Cerveza 3",
      price: 17,
      img: "https://www.cocinista.es/download/bancorecursos/ingredientes/ingrediente-clarificante-cerveza.jpg",
      categoria: "cervezas"
  },
  {
      id: 8,
      name: "Cerveza 4",
      price: 17,
      img: "https://www.cocinista.es/download/bancorecursos/ingredientes/ingrediente-clarificante-cerveza.jpg",
      categoria: "cervezas"
  },
]



function ItemListContainer(props) {

  const [data, setData] = useState ([])
  const {categoriaId} = useParams ()

  useEffect(()=>{
    const getData = new Promise (resolve => {
      setTimeout(() => {
        resolve (productos)
      }, 1000);
    })
    if (categoriaId) {
      getData.then (res => setData(res.filter(producto => producto.categoria === categoriaId)))
    } else {
      getData.then (res => setData(res))
    }
  }, [categoriaId])

  return (
      <>
      
      <div className='cont-cards'>
        <ItemList data={data}/>
      </div>
      </>
  )
}

export default ItemListContainer
