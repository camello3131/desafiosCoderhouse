import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from "react-router-dom"
import {getFirestore, doc, getDoc } from "firebase/firestore"

export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    const {detalleId} = useParams();

    useEffect(() =>{
        const queryDb = getFirestore();
        const queryDoc = doc(queryDb, "productos", detalleId)
        getDoc(queryDoc)
            .then(res => setData({id: res.id, ...res.data()}))
    }, [])
  return (
    <ItemDetail data = {data}/>
  )
}

export default ItemDetailContainer