import React, {useState, useEffect} from 'react'
import ItemList from '../item/ItemList'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'
import {getFirestore, collection, getDocs, query, where } from "firebase/firestore"

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

  return (
      <>
      
      <div className='cont-cards'>
        <ItemList data={data}/>
      </div>
      </>
  )
}

export default ItemListContainer
