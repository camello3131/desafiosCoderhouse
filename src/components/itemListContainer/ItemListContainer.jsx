import React, {useState, useEffect} from 'react'
import ItemList from '../item/ItemList'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'
import {getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { BeatLoader } from 'react-spinners'

function ItemListContainer(props) {

  const [data, setData] = useState ([])
  const {categoriaId} = useParams ()

  useEffect(()=>{

    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, "productos");
    
    if (categoriaId) {
      const queryFilter = query(queryCollection, where ("categoria", "==", categoriaId))
      getDocs (queryFilter)
        .then (res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data() })))) 
    } else {
      getDocs (queryCollection)
        .then (res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
    }
  }, [categoriaId])

  const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading (true)
      setTimeout(()=> {
          setLoading (false)
      }, 3000)
    }, [])


  return (
      <>
      <div className='contCards container'>
        {
          loading ?
          <BeatLoader color='#8030ff' className="loader"/>
          :
          <ItemList data={data} />
        }
      </div>
      </>
  )
}

export default ItemListContainer
